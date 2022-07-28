import { ListOfMovies, MovieItem, Poster, Title, H1 } from './Home.styled'
import { getMoviesList } from 'api/getMoviesList';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

export const Home = () => {

    const [trendingList, setTrendingList] = useState([]);       // API trending list
    const location = useLocation();

    useEffect(() => {
        getMoviesList().then(setTrendingList).catch('error')
    }, []);

    return (
        <>
            <H1>Trending today</H1>
            <ListOfMovies as='main'>
                {trendingList.map(({ id, title, poster_path }) => (
                    <MovieItem to={`movies/${id}`} key={id} state={{ from: location }}>
                        <Poster src={poster_path} alt='movie poster' />
                        <Title>{title}</Title>
                    </MovieItem>))}
            </ListOfMovies>
        </>
    )
}  