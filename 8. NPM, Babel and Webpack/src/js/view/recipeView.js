import { elements } from "./base";

const formatCount = decim => {
    if(decim) {
        //decim = 2.5 -> 5/2 ->> 2 1/2

        const [int,dec] = decim.toString().split('.').map(el => parseInt(el, 10));

        if(!dec) return decim;

        if(int === 0) {
            const fr = new Fraction(decim);
            if(fr.numerator/fr.denominator == undefined) return "";
            return `${fr.numerator}/${fr.denominator}`;             ///// 1/2
        } else{
            const fr = new Fraction(decim - int);
            if(fr.numerator/fr.denominator == undefined) return "";

            return `${int} ${fr.numerator}/${fr.denominator}`;      ///// 2 1/2
        }



    }

    return '';                  ///if nothing return empty
}


const checkMeasure = (m) => {
    
    
    if(m == undefined)
    return "";


    return m;
}

const createIngredient = (ingredient, index, mix) => {
    let unit = " ";
    let measure = " ";
    try{
    if(mix.measureDetail[index].unit !== undefined){
        unit = mix.measureDetail[index].unit;
     //   console.log(unit);
    }
    if(mix.measureDetail[index].measure !== undefined){
        measure = mix.measureDetail[index].measure;
     //   console.log(measure);
    }
} catch(error){

}
 return   `



<li class="recipe__item">
    
<svg class="recipe__icon">
<use href="img/icons.svg#icon-check"></use>
</svg>

<div class="recipe__count">${formatCount(unit)} ${checkMeasure(measure)}</div>
        <div class="recipe__ingredient">
                <span class="recipe__unit">${ingredient}</span>
        </div>
  </li>
`};

export const renderMix = (mix, isLiked) => {
   const markup =  `
<figure class="recipe__fig">
    <img src="${mix.img}" alt="${mix.title}" class="recipe__img">
    <h1 class="recipe__title">
        <span>${mix.title}</span>
    </h1>
</figure>
<div class="recipe__details">
    <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use href="img/icons.svg#icon-stopwatch"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${mix.servings}</span>
        <span class="recipe__info-text"> minutes</span>
    </div>
    <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use href="img/icons.svg#icon-man"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${mix.servings}</span>
        <span class="recipe__info-text"> servings</span>

        <div class="recipe__info-buttons">
            <button class="btn-tiny btn-dec">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-minus"></use>
                </svg>
            </button>
            <button class="btn-tiny btn-inc">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-plus"></use>
                </svg>
            </button>
        </div>

    </div>
    <button class="recipe__love">
        <svg class="header__likes">
            <use href="img/icons.svg#icon-heart${isLiked ? '' : '-outlined'}"></use>
        </svg>
    </button>
</div>



<div class="recipe__ingredients">
    <ul class="recipe__ingredient-list">
  
    ${mix.ingredients.map((currentingredient, index)=>createIngredient(currentingredient, index, mix)).join(' ')}
   
 </ul>

    <button class="btn-small recipe__btn recipe__btn--add">
        <svg class="search__icon">
            <use href="img/icons.svg#icon-shopping-cart"></use>
        </svg>
        <span>Add to shopping list</span>
    </button>
</div>

<div class="recipe__directions">
    <h2 class="heading-2">How do i make it</h2>
    <p class="recipe__directions-text">
        ${mix.instruction}
    </p>
    <a class="btn-small recipe__btn" href="mix.url" target="_blank">
        <span>Directions</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-right"></use>
        </svg>

    </a>
</div>
    `
    elements.mix.insertAdjacentHTML('afterbegin', markup);
};

export const clearMix = () => {
    elements.mix.innerHTML = '';
};

export const updateServingsIngredients = mix => {
    //Update Servings
    document.querySelector('.recipe__info-data--people').textContent = mix.servings;
    //Update Ingredients
    const countElements = Array.from(document.querySelectorAll('.recipe__count'));
    countElements.forEach((el, i) => {
        el.textContent = `${formatCount(mix.measureDetail[i].unit)} ${checkMeasure(mix.measureDetail[i].measure)}`;
        
    });
    
};
