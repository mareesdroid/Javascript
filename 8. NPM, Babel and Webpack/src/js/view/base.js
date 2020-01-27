export const elements = {
    searchButton: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchResults: document.querySelector('.results__list'),
    searchContainer: document.querySelector('.results'),
    searchResPages: document.querySelector('.results__pages'),
    mix: document.querySelector('.recipe'),
    shopping: document.querySelector('.shopping__list'),
    likeMenu: document.querySelector('.likes__field'),
    likesList: document.querySelector('.likes__list')

   
};
export const elementStrings = {
    loader: 'loader'
}
export const renderoader = parent =>{
    const loader = `
    <div class="${elementStrings.loader}">
        <svg>
            <use href="img/icons.svg#icon-cw"></use>
        </svg>
    </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader) loader.parentElement.removeChild(loader);
};