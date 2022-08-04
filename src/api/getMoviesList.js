import { apiRequest } from "./api";
const noPoster = 'https://filmesiseriale.net/img/noposter.jpg';
const URL_API = 'https://image.tmdb.org/t/p/w500/';

// getting list of trending
export const  getMoviesList = async () => {
    const response = await apiRequest('trending/movie/week');
    response.data.results.map(movie => movie.poster_path = movie.poster_path !== null ?
        (URL_API + movie.poster_path) : noPoster)
    return response.data.results;
}

// getting list of movies by search
export const getMoviesSearch = async (query) => {
    if (query !== '') {
        try {
            const response = await apiRequest('search/movie', { query: query });
            response.data.results.map(movie => movie.poster_path = movie.poster_path !== null ?
                (URL_API + movie.poster_path) : noPoster)
            return response.data;
        } catch {
        }
    } else {
        return {results: [], total_results: -1}
    }
}

// get an info of one movie
export const getMovieInfo = async (id) => {
    
    const response = await apiRequest(`movie/${id}`);
    response.data.poster_path = response.data.poster_path !== null ?
        (URL_API + response.data.poster_path) : noPoster;
    return response.data;
}

// get cast
export const getCast = async (id) => {

    const response = await apiRequest(`movie/${id}/credits`);
    response.data.cast.map(actor => actor.profile_path = actor.profile_path !== null ?
        (URL_API + actor.profile_path) :
        ('https://png.pngitem.com/pimgs/s/49-498069_talk-about-random-wiki-shy-guy-mario-hd.png'))
    return response.data.cast;
}

// get reviews
export const getReviews = async (id) => {
    const response = await apiRequest(`movie/${id}/reviews`);
    return response.data.results;
}