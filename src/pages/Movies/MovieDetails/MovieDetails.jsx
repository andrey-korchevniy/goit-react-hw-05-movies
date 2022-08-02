import { useState, useEffect } from "react";
import { getMovieInfo } from "api/getMoviesList";
import { Wrapper, Img, Info } from "./MovieDetails.styled";
import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import { Button } from "components/Button/Button";

const MovieDetails = () => {

    const [movieInfo, setMovieInfo] = useState({});         // API movie info 
    const { movieId } = useParams();                        // the movie id
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    useEffect(() => {
        getMovieInfo(movieId).then(setMovieInfo).catch()
    }, [movieId]);

    const { poster_path, title, release_date, vote_average, overview, genres } = movieInfo;

    if (poster_path !== undefined) {
        return (
            <main>
                <Button path={backLinkHref} title={`Go back`} />
                <Wrapper>
                    <Img src={poster_path} alt='movie poster' />
                    <Info>
                        <h2>{title} ({release_date.slice(0, 4)})</h2>
                        <p>User Score: {(vote_average * 10).toFixed(0)}%</p>
                        <h3>Overview</h3>
                        <p>{overview}</p>
                        <h3>Genres</h3>
                        <p>{genres.map(genre => <span key={genre.name}>{genre.name}  </span>)}</p>
                    </Info>
                </Wrapper>
                <hr></hr>
                <Info>
                    <h4>Additional information</h4>
                    <ul>
                        <li><Link to="cast">Cast</Link></li>
                        <li><Link to="reviews">Reviews</Link></li>
                    </ul>
                </Info>
                <hr></hr>
                <Outlet />
            </main>
        )
    }
}

export default MovieDetails;