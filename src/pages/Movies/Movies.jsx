import { useState, useEffect } from "react";
import { getMoviesSearch } from 'api/getMoviesList';
import { MovieItem, Poster, Title } from '../../pages/Home/Home.styled'
import { useLocation, useSearchParams, Outlet } from "react-router-dom";
import { SearchBar } from "components/SearchBar/SearchBar";
import { FindText, FindBlock, ListOfMovies } from "./Movies.styled";
import nothing from '../../images/nothing.png';

const Movies = () => {
    const [query, setQuery] = useState('');             // a search word or frase
    const [movies, setMovies] = useState([]);           // API movie list by search frase
    const [total, setTotal] = useState(-1);             // marker
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


    // render 1 of 3 options by total-value: =(-1) - only searchbar;  >0 - list jf movies; =0 - nothing has been found
    if (total === -1) {
        return (      
            <SearchBar onSearch={onSearch} />
        )

    } else if (total > 0) {
        return (
            <main>
                <SearchBar onSearch={onSearch} />
                <ListOfMovies as='main'>
                    {movies.map(({ id, title, poster_path }) => (
                        <MovieItem to={`${id}`} key={id} state={{ from: location }}>
                            <Poster src={poster_path} alt='movie poster' />
                            <Title>{title}</Title>
                        </MovieItem>))}
                    <Outlet />
                </ListOfMovies>
            </main>
        )
    } else {
        return (
            <main>
                <SearchBar onSearch={onSearch} />
                <FindBlock as='main'>
                <FindText>Nothing was finded :(</FindText>
                    <img src={nothing} alt='nothing is found'/>
                </FindBlock>
            </main>
        )
    }
}

export default Movies;

