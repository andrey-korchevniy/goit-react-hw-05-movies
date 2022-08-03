import { useState, useEffect } from "react";
import { getMovieInfo } from "api/getMoviesList";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { Nav } from "components/Nav/Nav";
import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { MovieDetailAction } from "components/MovieDetailAction/MovieDetailAction";

const MovieDetails = () => {

    const [movieInfo, setMovieInfo] = useState({});         // API movie info 
    const { movieId } = useParams();                        // the movie id
    const location = useLocation();
    const backLinkHref = location.state.from ?? "/";

    useEffect(() => {
        getMovieInfo(movieId).then(setMovieInfo).catch()
    }, [movieId]);

    const { poster_path } = movieInfo;

    if (poster_path !== undefined) {
        return (
            <main>
                <Nav path={backLinkHref} title={`Go back`} />
                <MovieInfo data={movieInfo} />
                <hr></hr>
                <MovieDetailAction />
                <hr></hr>
                <Outlet />
            </main>
        )
    }
}

export default MovieDetails;