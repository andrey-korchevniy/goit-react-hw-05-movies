import axios from "axios";

const API_KEY = '686ce405e78c10a98219cd1fc59d1c0f';
const API_URL = 'https://api.themoviedb.org/3/';

// getting list of trending
export const getMoviesList = async () => {
    const response = await axios.get(API_URL+'trending/movie/week', {
        params: {
            api_key: API_KEY,
        }
    });
    response.data.results.map(movie => movie.poster_path = movie.poster_path !== null ?
        (`https://image.tmdb.org/t/p/w500/` + movie.poster_path) : 'https://filmesiseriale.net/img/noposter.jpg' )
    return response.data.results;
}

// getting list of movies by search
export const getMoviesSearch = async (query) => {
    if (query !== '') {
        try {
            const response = await axios.get(API_URL + 'search/movie', {
                params: {
                    api_key: API_KEY,
                    query: query,
                }
            });
            response.data.results.map(movie => movie.poster_path = movie.poster_path !== null ?
        (`https://image.tmdb.org/t/p/w500/` + movie.poster_path) : 'https://filmesiseriale.net/img/noposter.jpg')
            return response.data;
        } catch {
        }
    } else {
        return {results: [], total_results: -1}
    }
}

// get an info of one movie
export const getMovieInfo = async (id) => {
    
    const response = await axios.get(API_URL+`movie/${id}`, {
        params: {
            api_key: API_KEY,
        }
    });
    response.data.poster_path = response.data.poster_path !== null ? (`https://image.tmdb.org/t/p/w500/` + response.data.poster_path) : ('https://filmesiseriale.net/img/noposter.jpg');
    return response.data;
}

// get cast
export const getCast = async (id) => {

    const response = await axios.get(API_URL+`movie/${id}/credits`, {
        params: {
            api_key: API_KEY,
        }
    });
    response.data.cast.map(actor => actor.profile_path = actor.profile_path !== null ?
        (`https://image.tmdb.org/t/p/w500` + actor.profile_path) : ('https://png.pngitem.com/pimgs/s/49-498069_talk-about-random-wiki-shy-guy-mario-hd.png'))
    return response.data.cast;
}

// get reviews
export const getReviews = async (id) => {
    const response = await axios.get(API_URL+`movie/${id}/reviews`, {
        params: {
            api_key: API_KEY,
        }
    });
    return response.data.results;
}