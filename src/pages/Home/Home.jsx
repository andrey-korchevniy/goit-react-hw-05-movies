import { H1 } from './Home.styled'
import { getMoviesList } from 'api/getMoviesList';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {

    const [trendingList, setTrendingList] = useState([]);       // API trending list
    const location = useLocation();

    useEffect(() => {
        getMoviesList().then(setTrendingList).catch('error')
    }, []);

    return (
        <>
            <H1>Trending today</H1>
            <MovieList list={trendingList} location={location} />
        </>
    )
}  

export default Home;