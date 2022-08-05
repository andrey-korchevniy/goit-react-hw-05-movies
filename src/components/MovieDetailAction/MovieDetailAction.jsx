import { Link } from "react-router-dom";
import { Info } from "components/MovieDetailAction/MovieDetailAction.styled";
import PropTypes from 'prop-types';

export const MovieDetailAction = ({ state }) => {

    return (
        <Info>
            <h4>Additional information</h4>
            <ul>
                <li><Link to="cast" state={state} >Cast</Link></li>
                <li><Link to="reviews" state={state} >Reviews</Link></li>
            </ul>
        </Info>
    )
}

MovieDetailAction.propTypes = {
  location: PropTypes.object
}