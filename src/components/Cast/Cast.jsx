import { getCast } from 'api/getMoviesList';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Img } from './Cast.styled';

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        getCast(movieId).then(setCast).catch()
    }, [movieId])

    return (
        <div>
            <ul>
                {cast.map(({id, profile_path, name, character }) => (
                    <li key={id}>
                        <Img src={profile_path} alt="actor" />
                        <p>{name} as {character}</p>
                    </li>))}
            </ul>
        </div>
    )
}