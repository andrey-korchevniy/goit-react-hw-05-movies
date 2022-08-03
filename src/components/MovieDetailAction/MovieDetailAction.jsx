import { Link } from "react-router-dom";
import { Info } from "pages/Movies/MovieDetails/MovieDetails.styled";

export const MovieDetailAction = () => {
    return (
        <Info>
            <h4>Additional information</h4>
            <ul>
                <li><Link to="cast">Cast</Link></li>
                <li><Link to="reviews">Reviews</Link></li>
            </ul>
        </Info>
    )
}