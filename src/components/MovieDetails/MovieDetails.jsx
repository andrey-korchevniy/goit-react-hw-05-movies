import { useState, useEffect } from "react";
import { getMovieInfo } from "api/getMoviesList";
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {

    const [movieInfo, setMovieInfo] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
            getMovieInfo(movieId).then(setMovieInfo).catch()
        }, [movieId])

    return (
        <div>
            <img src={movieInfo.poster_path} />
        </div>
    )
}