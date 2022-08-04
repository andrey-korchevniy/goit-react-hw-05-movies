import { Link } from "react-router-dom";
import { Info } from "components/MovieDetailAction/MovieDetailAction.styled";

export const MovieDetailAction = ({location}) => {
    return (
        <Info>
            <h4>Additional information</h4>
            <ul>
                <li><Link to="cast" state={{from: location}}>Cast</Link></li>
                <li><Link to="reviews" state={{from: location}}>Reviews</Link></li>
            </ul>
        </Info>
    )
}