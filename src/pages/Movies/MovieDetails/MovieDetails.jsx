import { useState } from "react";
import { getMovieInfo } from "api/getMoviesList";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { MovieDetailAction } from "components/MovieDetailAction/MovieDetailAction";
import { LinkBack } from "components/LinkBack/LinkBack";

const MovieDetails = () => {
    const [movieInfo, setMovieInfo] = useState({});         // API movie info 
    const { movieId } = useParams();                        // the movie id
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';  
    const { poster_path } = movieInfo;

    getMovieInfo(movieId).then(setMovieInfo).catch();

    if (poster_path !== undefined) {
        return (
            <>
                <LinkBack to={backLinkHref} children={`Go back`} />
                <MovieInfo data={movieInfo} />
                <hr></hr>
                <MovieDetailAction location={location} />
                <hr></hr>
                <Outlet />
            </>
        )
    }
}

export default MovieDetails;