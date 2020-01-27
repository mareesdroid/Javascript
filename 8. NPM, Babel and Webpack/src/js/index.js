
import Search from './model/Search';
import {elements, renderoader, clearLoader} from './view/base';
import * as mySearchView from './view/searchView';
import * as myRecipeView from './view/recipeView';
import * as myListView from './view/listView';
import * as myLikeView from './view/likesView';

import List from './model/List';
import Mixtuare from './model/Mixtuare';
import Likes from './model/Likes';


/*  *TO-DO
        * Search object
        * Current recipe Object
        * shooping list object
        * liked recipes
 */


 ////Search Controller
const state = {};
//window.state = state;                 ///for testing
const controlSearch = async () =>{
    /**
     * TO_DO
     * get query from view
     * new search object and add to state
     * prepare UI for results
     * Search for recipes
     * render results on ui  
     */

     const query = mySearchView.getInput();

     if(query) {
         state.search = new Search(query);
         mySearchView.clearInput();
         renderoader(elements.searchContainer);
         mySearchView.clearPreviousResults();
         try{
         await state.search.getResults();
        clearLoader();
   //     console.log(state.search.result); 

         mySearchView.renderResults(state.search.result)
         } catch(error){
             alert('Something went wrong');
             clearLoader();
         }
     }


};
elements.searchButton.addEventListener('submit',e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');    ///returns the matching ancestor near child if the given is matching check closest mdn
    //console.log(btn);            
    if(btn){
            const goToPage = parseInt(btn.dataset.goto);
            mySearchView.clearPreviousResults();
            mySearchView.renderResults(state.search.result, goToPage)

      //      console.log(goToPage);
    }
});

  

////////Mix Controller

/**TO-DO
 * 
 * 
 * 
 */

//  const mix = new Mixtuare(17837);
//  mix.getMixtuare();
//  console.log(mix);

 const controlMix = async (event) => {
     // get id from url
    const id = window.location.hash.replace('#','');
    //console.log(event.target.className);

    if(id){
        /**TO-DO
         * prepare the ui for changes 
         * create new mix objext
         * get cocktail mix data
         * render mix
         */
        // prepare the ui for changes 
        myRecipeView.clearMix();
        renderoader(elements.mix);
        
        //hightligh selected
        if(state.search)mySearchView.highLightSelected(id);

        //create new mix objext
        state.mix = new Mixtuare(id);
        await state.mix.getMixtuare();
        //get cocktail mix data      calculate
       state.mix.parseIngredients();
       state.mix.calcServings();
     
      // render mix
        clearLoader();
      //  console.log(state.mix);
        myRecipeView.renderMix(state.mix, state.likes.isLiked(id));
    }
 };

//  window.addEventListener('hashchange', controlMix, false);
//  window.addEventListener('load', controlMix, false);

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlMix));



///List controller (shopping list)


const conrolList = ()=>{

    /**TO-DO
     * Create a new List if no list
     * add each ingredient to the list
     * 
     */

     if(!state.list) state.list = new List();

     //Add ech ingredient to the list and the ui
        state.mix.ingredients.forEach((el, index) => {
           
            const item = state.list.addItem( state.mix.measureDetail[index].unit, state.mix.measureDetail[index].measure, el); 
          
        myListView.renderItem(item);
        });
       
};

// handle update and delete list item events

elements.shopping.addEventListener('click', e=>{
    const id = e.target.closest('.shopping__item').dataset.itemid;                               //////see shopping__item in listview we give dataset is itemid

    //handle the delete button
    if(e.target.matches('.shopping__delete, .shopping__delete *')){
        // delete from state
        state.list.deleteItem(id);
        //delete from ui
        myListView.deleteItem(id);

    }   else if(e.target.matches('.shopping__count-value')){            /// handle the count update
        const val =  parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);
    }


});





////like controler

const controlLike = () => {
    if(!state.likes) state.likes = new Likes();

    const curId = state.mix.id;


    if(!state.likes.isLiked(curId)){
        /**TO-DO
         * Add like to the current mix
         * toggle the like btn
         * add like to the ui list
         */

         //add like
         const newLike = state.likes.addLike(curId, state.mix.title, state.mix.type, state.mix.img);
         myLikeView.toggleLikeBtn(true);

         //add like to the ui list
         console.log(state.likes);
         myLikeView.renderLike(newLike);

    } else{
         /**TO-DO
         * remove like from the current mix
         * toggle the like btn
         * remove like from the ui list
         */

        //remove like from the current mix
        state.likes.deleteLike(curId);
        myLikeView.toggleLikeBtn(false);
//remove like from the ui list
        console.log(state.likes);
        myLikeView.deleteLike(curId);
    }

    myLikeView.toggelLikeMenu(state.likes.getNumLikes());
};



// restore liked cocktail from local storage

window.addEventListener('load', () => {
    state.likes = new Likes();
    //restore likes
    state.likes.readStorage();
    //toggle menu
    myLikeView.toggelLikeMenu(state.likes.getNumLikes());

    // renderview
    state.likes.likes.forEach(el=>{
        myLikeView.renderLike(el);
    });
});



//handling mix button clicks
elements.mix.addEventListener('click', e=>{
    console.log(state.mix);
    if(e.target.matches('.btn-dec, .btn-dec *'))     {              //fires the event selector(btn-dec or btn-dec * (btn dec childs))
        if(state.mix.servings > 1){
            state.mix.updateServings('dec');
            myRecipeView.updateServingsIngredients(state.mix);
        }
      console.log(state.mix);
    } else if(e.target.matches('.btn-inc, .btn-inc *'))     {     
        state.mix.updateServings('inc');
        myRecipeView.updateServingsIngredients(state.mix);
        console.log(state.mix);
    } else if(e.target.matches('.recipe__btn--add, .recipe__btn--add *'))       {
        //add ingredients to shopping list
        conrolList();
    } else if(e.target.matches('.recipe__love, .recipe__love *')){
        //Like Controller
        controlLike();
    }
  
});




