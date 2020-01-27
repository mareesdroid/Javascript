import { elements } from "./base";

export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const ID = 2;

export const clearInput = () => {
    elements.searchInput.value = '';
    
}

export const getInput = () => elements.searchInput.value;
export const clearPreviousResults = () => {
    elements.searchResults.innerHTML = '';
    elements.searchResPages.innerHTML = '';
};

export const highLightSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(el => {
        el.classList.remove('results__link--active');
    });
    try{
        document.querySelector(`.results__link[href*="${id}"]`).classList.add('results__link--active');
    } catch{

    }
    
    console.log(id);
  
}


/**
 *ex : 
    Jack Daniel's Tennessee Whiskey
    in first accumalator is 0
    (i). acc : 0 _____  acc + cur.length(Jack) = 0+4 _______ 4 <= limit so it push it into the array return 4     newTitle = ['Jack'];
    (ii).acc : 4 ______ acc + cur.length(Daniel's) = 4+8 _____ 12 <= limit so it push it into the array return 12 newTitle = ['Jack', 'Daniel's'];
    (iii).acc : 12 ______ acc + cur.length(Tennessee) = 12+9 _____ 21 >= limit so if not satisfied return 21 newTitle = ['Jack', 'Daniel's'];
    (iv).acc : 21 ______ acc + cur.length(Whiskey) = 21+7 _____ 28 >= limit so if not satisfied return 28  newTitle = ['Jack', 'Daniel's'];
     (v).after iteration finsihed It returns newTitle.join(' ')(this gives space between each data inside an array) ...   return  = `Jack Daniel's ...`
 */

export const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if(title.length > limit){
        title.split(' ').reduce((acc, cur) => {
            if(acc + cur.length <= limit){
            newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        return `${newTitle.join(' ')} ...`;
    }

    return title;
};

const renderRecipe = (recipe) => {
    const markup =`
    <li>
    <a class="results__link" href="#${recipe.idDrink}">
        <figure class="results__fig">
            <img src="${recipe.strDrinkThumb}" alt="${recipe.title}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${limitRecipeTitle(recipe.strDrink)}</h4>
            <p class="results__author">${recipe.strAlcoholic}</p>
        </div>
    </a>
              </li>
    `;

    elements.searchResults.insertAdjacentHTML('beforeend', markup);
};

const createButton = (page, type) => {
return `
     <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
     <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
`;
}


/**
 * numResults = totl results from server
 * resPerPage = number of data to put on a each page
 * page = 
 * pages = calculate how may page we should need
 * ex:4.1
 * 2.2
 ******************* math.ceil()*****************
 * 5
 * 3
 ******************* math.floor()*****************
 * 4
 * 2
 */
 
const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage); 
    let button;
    if(page === 1 && pages > 1){
        //first page dont show prev
        button = createButton(page, 'next');
    } else if(page < pages){
        //not first and last page show prev and next
        button = `
                ${createButton(page, 'prev')}
                ${createButton(page, 'next')}
        `;
    } else if(page === pages && pages > 1){
        //last page dont show next
        button = createButton(page, 'prev');
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);

};


/*
* (scenario 1) -> page =1 , resperPage 10               0 to 10
        start = 0;
        end = 10;
* (scenario 2) -> page =2 , resperPage 10               10 to 20
        start = 1*10 = 10;
        end = 2*10 = 20;        
* (scenario 3) -> page =2 , resperPage 5                5 to 10
        start = 1*5 = 5;
        end = 2*5 = 10;     

*/
export const renderResults = (recipes ,page = 1, resPerPage = 10) => {
    //render results for current page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(renderRecipe);                    //////slice takes the value from array.slice(startIndex, endIndex)   -> it returns array index 0 to 10  -> from that each time we add recipe             

    //render pagination buttons
    renderButtons(page, recipes.length, resPerPage);
};