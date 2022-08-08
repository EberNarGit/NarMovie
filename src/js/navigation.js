//lista de eventos a escuchar
window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

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
    getTrendingMoviesPreview();
    getTrendingMoviesGenres();
}
function trendsPage(){
    console.log('Trends!!');
}
function searchPage(){
    console.log('Search!!');
}
function moviesPage(){
    console.log('Movie!!');
}
function categoriesPage(){
    console.log('Category!!');
}