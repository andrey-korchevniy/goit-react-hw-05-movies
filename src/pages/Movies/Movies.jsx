import { useState, useEffect } from "react";
import { getMoviesSearch } from 'api/getMoviesList';
import { useLocation, useSearchParams } from "react-router-dom";
import { SearchBar } from "components/SearchBar/SearchBar";
import { MovieList } from 'components/MovieList/MovieList';
import { SearchBlock } from "components/SearchBlock/SearchBlock";

const Movies = () => {
    const [query, setQuery] = useState('');                 // a search word or frase
    const [movies, setMovies] = useState([]);               // API movie list by search frase
    const [total, setTotal] = useState(null);               // marker
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("query");

    // render a page after return from MovieDetails
    if (name !== null & name !== query) {
        setQuery(name)
    }
    // processing search-btn click
    const onSearch = (data) => {
        if (data.query !== query) {
            setQuery(() => data.query);
            setSearchParams({ query: data.query })
        }
    }

    useEffect(() => {
        getMoviesSearch(query)
            .then(data => {
                setMovies(data.results);
                setTotal(data.total_results);
            }).catch('error')
    }, [query]);

    // render 1 of 3 options by total-value: = null - only searchbar;  > 0 - list of movies; = 0 - nothing has been found
    return (
        <div>
            <SearchBar onSearch={onSearch} />
            {total > 0 ?
                <MovieList list={movies} location={location} /> :
                <SearchBlock message={total === 0 ? 'Nothing was finded :(' : 'Type any title of movie'} />
            }
        </div>
    )
}

export default Movies;

