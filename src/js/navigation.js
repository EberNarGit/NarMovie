//lista de eventos a escuchar
window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
//Lista de eventos para navegar
searchFormBtn.addEventListener('click', () => {location.hash = '#search=';});
trendingBtn.addEventListener('click', () => {location.hash = '#trends';});
arrowBtn.addEventListener('click', () => {location.hash = '.header-arrow';});
arrowBtns.addEventListener('click', () => {location.hash = '.header-arrows';});


//funcion para localizar en donde se encuentra el hash
function navigator(){
    console.log({ location });
    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if(location.hash.startsWith('#search=')){
        searchPage();
    }else if(location.hash.startsWith('#movie=')){
        moviesPage();
    }else if(location.hash.startsWith('#category=')){
        categoriesPage();
    }else{homePage();}
}

function homePage(){
    console.log('Home!!!');
    //Remove Inactive
        // Header
        headerTitle.classList.remove('inactive');
        searchForm.classList.remove('inactive');
        // Movie-scrool
        trendingPreviewSection.classList.remove('inactive');
        // Categories
        categoriesPreviewSection.classList.remove('inactive');
    // Inactive ;
        arrowBtn.classList.add('inactive');
        headerCategory.classList.add('inactive');
        genericList.classList.add('inactive');
    
    //Funciones llamadas
    getTrendingMoviesPreview();
    getTrendingMoviesGenres();
}
function trendsPage(){
    console.log('Trends!!');
    //Remove Inactive
        // Header
        headerTitle.classList.remove('inactive');
        arrowBtn.classList.remove('inactive');
        //Movie
        genericList.classList.remove('inactive');
        
        // Inactive ;
        // Header
        headerCategory.classList.add('inactive');
        searchForm.classList.add('inactive');
        // Movie-scrool
        trendingPreviewSection.classList.add('inactive');
        // Categories
        categoriesPreviewSection.classList.add('inactive');
}
function searchPage(){
    console.log('Search!!');
    //Remove Inactive
        // Header
        headerTitle.classList.remove('inactive');
        arrowBtn.classList.remove('inactive');
        searchForm.classList.remove('inactive');
        //Movie
        genericList.classList.remove('inactive');
        
        // Inactive ;
        // Header
        headerCategory.classList.add('inactive');
        // Movie-scrool
        trendingPreviewSection.classList.add('inactive');
        // Categories
        categoriesPreviewSection.classList.add('inactive');
}
function moviesPage(){
    console.log('Movie!!');
    //Remove Inactive
        //Movie
        movieDetailsSection.classList.remove('inactive');
        arrowBtns.classList.remove('inactive');
        // Inactive ;
        // Header
        headerCategory.classList.add('inactive');
        headerTitle.classList.add('inactive');
        arrowBtn.classList.add('inactive');
        searchForm.classList.add('inactive');
        headerSection.classList.add('inactive');
        // Movie-scrool
        trendingPreviewSection.classList.add('inactive');
        genericList.classList.add('inactive');
        // Categories
        categoriesPreviewSection.classList.add('inactive');
}
function categoriesPage(){
    console.log('Category!!');
    //Remove Inactive
        // Header
        arrowBtn.classList.remove('inactive');
        headerCategory.classList.remove('inactive');
        //Movie
        genericList.classList.remove('inactive');
        
    // Inactive ;
        // Header
        headerTitle.classList.add('inactive');
        searchForm.classList.add('inactive');
        // Movie-scrool
        trendingPreviewSection.classList.add('inactive');
        // Categories
        categoriesPreviewSection.classList.add('inactive');
}