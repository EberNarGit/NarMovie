//Iniciacion de la libreria axios
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{'Content-Type': 'application/json;charset=utf8'},
    params: {
        'api_key': API_KEY,
    },
})

// Utils
async function createMovies(movies, container){
    //manipulacion del DOM
    const nodesMovies = movies.map(movie => {
        const divMovieConteiner = document.createElement('div');
        divMovieConteiner.className = 'movie-container';
        divMovieConteiner.addEventListener('click', () =>{
            location.hash = '#movie=' + movie.id;
        });

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

            // const dateMovie = document.createElement('p');
            // dateMovie.className = 'info-details';
            // dateMovie.textContent = movie.release_date;
            // divInfoMovie.appendChild(dateMovie);

        return divMovieConteiner;
    });

    container.innerHTML ="";
    container.append(...nodesMovies);
}
async function getCategories(movies, container){
        //manipulacion del DOM
        const nodesCategories = movies.map(category => {
    
            const nameCategory = document.createElement('p');
            nameCategory.textContent = category.name + ",";
    
            return nameCategory;
        });
    
        container.innerHTML = "";
        container.append(...nodesCategories);
}

//Funcion que trae las peliculas en tendencia
async function getTrendingMoviesPreview(){
    //se llama a axios
    const { data } = await api('/trending/movie/week');

    //guardamos el arreglo
    const movies = data.results;
    console.log(data, movies);

    //Manipulacion de DOM
    createMovies(movies,trendingPreviewMovieList);
    
}

//Funcionpara traer peliculas por categorias
async function getTrendingMoviesGenres(){
    //se llama a axios
    const { data } = await api('/genre/movie/list');

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
        nameCategory.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`;
        });
        divCategoryConteiner.appendChild(nameCategory);

        return divCategoryConteiner;
    });

    categoriesPreviewList.innerHTML = "";
    categoriesPreviewList.append(...nodesCategories);
}

//Funcion que trae las peliculas dependiendo de su categoria
async function getMovieByCategory(id){
    //se llama a axios
    const { data } = await api('/discover/movie', {
        params: {
            with_genres: id,
        },
    });

    //guardamos el arreglo
    const movies = data.results;
    console.log(data, movies);

    //Manipulacion de DOM
    createMovies(movies, genericSection);
}

//Funcion que trae las peliculas por su nombre
async function getMoviesBySearch(query){
    //se llama a axios
    const { data } = await api('/search/movie', {
        params: {
            query,
        },
    });

    //guardamos el arreglo
    const movies = data.results;
    console.log(data, movies);

    //Manipulacion de DOM
    createMovies(movies, genericSection);
}

//Funcion que trae las peliculas en tendencia
async function getTrendingMovies(){
    //se llama a axios
    const { data } = await api('/trending/movie/day');

    //guardamos el arreglo
    const movies = data.results;
    console.log(data, movies);

    //Manipulacion de DOM
    createMovies(movies, genericSection);
}

//Funcion que trae las peliculas dependiendo de su categoria
async function getMovieById(id){
    //se llama a axios
    const { data:movie } = await api('movie/' + id);
    console.log(movie);
    //img background movie movieDetails
    imgBackgroundBlur.setAttribute('alt', movie.original_title);
    imgBackgroundBlur.setAttribute('src','https://image.tmdb.org/t/p/w500/'+movie.poster_path);
    imgBackground.setAttribute('alt', movie.original_title);
    imgBackground.setAttribute('src','https://image.tmdb.org/t/p/w500/'+movie.poster_path);

    //Manipulacion de DOM

    titleMovieDetails.textContent = movie.title;
    getCategories(movie.genres, categoryMovieDetails);
    runtime.textContent = movie.runtime + "min";
    release_date.textContent = movie.release_date;
    statusMovieDetails.textContent = movie.vote_average.toFixed(1) + "/10";
    descriptionMovieDetails.textContent = movie.overview;
    getMovieByReleted(id);
}

//Funcion para traer las peliculas relacionadas
async function getMovieByReleted(id){
    //se llama a axios
    const { data } = await api(`movie/${id}/recommendations`);
    const relatedMovie = data.results;
    //img background movie movieDetails
    const nodesMovies = relatedMovie.map(movie => {
        const imgMovie = document.createElement('img');
        imgMovie.setAttribute('alt', movie.original_title);
        imgMovie.setAttribute('src', 
        'https://image.tmdb.org/t/p/w300/'+movie.poster_path);
        imgMovie.addEventListener('click', () =>{
            location.hash = '#movie=' + movie.id;
        });

        return imgMovie;
    });

    relatedMovieDetails.innerHTML ="";
    relatedMovieDetails.append(...nodesMovies);

}