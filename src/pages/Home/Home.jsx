import { ListOfMovies, MovieItem, Poster, Title, H1 } from './Home.styled'
import { getMoviesList } from 'api/getMoviesList';
import { useState, useEffect } from 'react';

export const Home = () => {

    const [trendingList, setTrendingList] = useState([]);

    useEffect(() => {
        getMoviesList().then(setTrendingList).catch('error')
    }, []);

    return (
        <>
        <H1>Trending today</H1>
        <ListOfMovies as='main'>
            {trendingList.map(({ id, title, poster_path }) => (
                <MovieItem to={`movies/${id}`} key={id}>
                    <Poster src={poster_path} alt='movie poster' />
                    <Title>{title}</Title>
                </MovieItem>))}
            </ListOfMovies>
            </>
    )
}  