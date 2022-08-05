import { useState, useEffect } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { MovieDetailAction } from "components/MovieDetailAction/MovieDetailAction";
import { BackLink } from "components/BackLink/BackLink";
import { getMovieInfo } from "api/getMoviesList";

const MovieDetails = () => {
    const [movieInfo, setMovieInfo] = useState({});         // API movie info 
    const { movieId } = useParams();                        // the movie id
    const location = useLocation();
    const [backLinkRef, setBackLinkRef] = useState(undefined)
    const { poster_path } = movieInfo;

    useEffect(() => {
        getMovieInfo(movieId).then(setMovieInfo).catch();
    }, [movieId]);

    useEffect(() => {
        if (!backLinkRef) {
            setBackLinkRef(location.state?.from ?? '/')
        }
    }, [location, backLinkRef]);

    if (poster_path !== undefined) {
        return (
            <>
                <BackLink to={backLinkRef} children={`Go back`} />
                <MovieInfo data={movieInfo} />
                <hr></hr>
                <MovieDetailAction state={{from: location}} />
                <hr></hr>
                <Outlet />
            </>
        )
    }
}

export default MovieDetails;