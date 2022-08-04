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
    const [backLocation, setBackLocation] = useState(location)

    useEffect(() => {
        getMovieInfo(movieId).then(setMovieInfo).catch()
    }, [movieId]);

    const { poster_path } = movieInfo;
console.log(location);
    if (poster_path !== undefined) {
        
        return (
            <>
                <Nav path={backLocation.state.from} title={`Go back`} />
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