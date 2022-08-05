import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { MovieList } from 'components/MovieList/MovieList';
import { getMoviesList } from 'api/getMoviesList';
import { H1 } from './Home.styled';

const Home = () => {
    const [trendList, setTrendList] = useState([]);       // API trending list
    const location = useLocation();

    useEffect(() => {
        getMoviesList().then(setTrendList).catch('error')
    }, []);

    return (
        <>
            <H1>Trending today</H1>
            <MovieList list={trendList} location={location} pagePath='movies/' />
        </>
    )
}  

export default Home;