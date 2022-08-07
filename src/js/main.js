//Funcion que trae las peliculas en tendencia
async function getTrendingMoviesPreview(){
    //se llama a fetch
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=' + API_KEY);
    const data = await res.json();

    //guardamos el arreglo
    const movies = data.results;
    console.log(data, movies);

    //manipulacion del DOM
    const nodesMovies = movies.map(movie => {
        const divMovieConteiner = document.createElement('div');
        divMovieConteiner.className = 'movie-container';

        const imgMovie = document.createElement('img');
        imgMovie.className = 'movie-img';
        imgMovie.setAttribute('alt', movie.original_title);
        imgMovie.setAttribute('src', 
        'https://image.tmdb.org/t/p/w300/'+movie.poster_path);
        divMovieConteiner.appendChild(imgMovie);

        const divInfoMovie = document.createElement('div');
        divInfoMovie.className = 'movie-container--info';
        divMovieConteiner.appendChild(divInfoMovie);

            const titleMovie = document.createElement('h2');
            titleMovie.className = 'movie-title';
            titleMovie.textContent = movie.original_title;
            divInfoMovie.appendChild(titleMovie);

            const dateMovie = document.createElement('p');
            dateMovie.className = 'info-details';
            dateMovie.textContent = movie.release_date;
            divInfoMovie.appendChild(dateMovie);

        return divMovieConteiner;
    });

    const trendingPreviewMovieList = document.querySelector('#trendingPreview .trendingPreview-movieList');
    trendingPreviewMovieList.append(...nodesMovies);
}
getTrendingMoviesPreview();

//Funcionpara traer peliculas por categorias
async function getTrendingMoviesGenres(){
    //se llama a fetch
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY);
    const data = await res.json();

    //guardamos el arreglo
    const categories = data.genres;
    console.log(data, categories);

    //manipulacion del DOM
    const nodesCategories = categories.map(category => {
        const divCategoryConteiner = document.createElement('div');
        divCategoryConteiner.className = 'category-container';

        const imgCategory = document.createElement('div');
        imgCategory.className = 'category-icon--small';
        imgCategory.setAttribute('id', 'id' + category.id);
        divCategoryConteiner.appendChild(imgCategory);

        const nameCategory = document.createElement('h3');
        nameCategory.className = 'category-title';
        nameCategory.textContent = category.name;
        divCategoryConteiner.appendChild(nameCategory);

        return divCategoryConteiner;
    });

    const sectionCategoriesConteiner = document.querySelector('#categoriesPreview .categoriesPreview-list');
    sectionCategoriesConteiner.append(...nodesCategories);
}
getTrendingMoviesGenres();