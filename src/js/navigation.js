//lista de eventos a escuchar
window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
//Lista de eventos para navegar
searchFormBtn.addEventListener('click', () => {location.hash = '#search=' +  searchFormInput.value});
trendingBtn.addEventListener('click', () => {location.hash = '#trends';});
arrowBtn.addEventListener('click', () => {history.back();});
arrowBtns.addEventListener('click', () => {history.back();});


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

    //Metodo para que el scroll siempre empiece desde arriba
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function homePage(){
    console.log('Home!!!');
    //Remove Inactive
        // Header
        headerSection.classList.remove('inactive');
        headerTitle.classList.remove('inactive');
        searchForm.classList.remove('inactive');
        arrowBtns.classList.add('inactive');
        // Movie-scrool
        trendingPreviewSection.classList.remove('inactive');
        // Categories
        categoriesPreviewSection.classList.remove('inactive');
    // Inactive ;
        arrowBtn.classList.add('inactive');
        headerCategory.classList.add('inactive');
        genericList.classList.add('inactive');
        movieDetailsSection.classList.add('inactive');

        headerTitle.innerHTML = 'NarMovies';
    
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
        movieDetailsSection.classList.add('inactive');


        headerTitle.innerHTML = 'Trending';
        getTrendingMovies();
}
function searchPage(){
    console.log('Search!!');
    //Remove Inactive
        // Header
        headerTitle.classList.add('inactive');
        arrowBtn.classList.remove('inactive');
        searchForm.classList.remove('inactive');
        arrowBtns.classList.add('inactive');
        //Movie
        genericList.classList.remove('inactive');
        
        // Inactive ;
        // Header
        headerCategory.classList.add('inactive');
        // Movie-scrool
        trendingPreviewSection.classList.add('inactive');
        // Categories
        categoriesPreviewSection.classList.add('inactive');
        movieDetailsSection.classList.add('inactive');


        //['#search', 'movie']
        const [_, query] = location.hash.split('='); 
        getMoviesBySearch(query);

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

        //['#movie', 'id']
        const [_, movieId] = location.hash.split('='); 
        getMovieById(movieId);
}
function categoriesPage(){
    console.log('Category!!');
    //Remove Inactive
        // Header
        arrowBtn.classList.remove('inactive');
        headerCategory.classList.remove('inactive');
        arrowBtns.classList.add('inactive');
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
        movieDetailsSection.classList.add('inactive');


    //Funciones que se llaman
    const [_, categoryData] = location.hash.split('='); //['#category=', 'id-name']
    const [categoryId, categoryName] = categoryData.split('-');
    const formal = categoryName.split('%20');

    const header = document.createElement('div');
    header.className = 'header--category';

        const iconHeader = document.createElement('div');
        iconHeader.className = 'category-icon--large';
        iconHeader.setAttribute('id', 'id' + categoryId );
        header.appendChild(iconHeader);

        const textHeader = document.createElement('h1');
        textHeader.textContent = formal.join(" ");
        header.appendChild(textHeader);

    headerCategory.innerHTML ="";
    headerCategory.append(header);
    getMovieByCategory(categoryId);

}