//reasignacion de querySelector()
const $ = (id) => document.querySelector(id);

// Sections 
const headerSection = $('#header');
const trendingPreviewSection = $('#trendingPreview');
const categoriesPreviewSection = $('#categoriesPreview');
const genericSection = $('#genericList');
const movieDetailsSection = $('#movieDetails');

// Lists & Container
const searchForm = $('#searchForm');
const trendingPreviewMovieList = $('#trendingPreview-movieList');
const categoriesPreviewList = $('#categoriesPreview-list');

// Elements
const headerTitle = $('.header-title');
const arrowBtn = $('.header-arrow');
const arrowBtns = $('.header-arrows');
const headerCategory = $('.header--category');
const searchFormBtn = $('#searchFromBtn');
const searchFormInput = $('#searchForm input');
const trendingBtn = $('#trendingBtn');

//movieDetails
const imgBackgroundBlur = $('.background-image--blur');
const imgBackground = $('.background-image') 
const titleMovieDetails = $('.movieDetails-info h2');
const categoryMovieDetails = $('.movieDetails-info p')
const statusMovieDetails = $('.rating-movie h3')
const runtime = $('.runtime');
const release_date = $('.info-movie .release_date');
const descriptionMovieDetails = $('.movieDetails-synopsis p');
const relatedMovieDetails = $('.movieDetails-related--images');