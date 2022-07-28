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
    response.data.results.map(movie => movie.poster_path = `https://image.tmdb.org/t/p/w500/`+ movie.poster_path )
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
            response.data.results.map(movie => movie.poster_path = `https://image.tmdb.org/t/p/w500` + movie.poster_path)
            return response.data;
        } catch {
        }
    } else {
        return {results: [], total_results: -1}
    }
}

// get an inho of one movie
export const getMovieInfo = async (id) => {
    
    const response = await axios.get(API_URL+`movie/${id}`, {
        params: {
            api_key: API_KEY,
        }
    });

    response.data.poster_path = `https://image.tmdb.org/t/p/w500/` + response.data.poster_path;
    return response.data;
}