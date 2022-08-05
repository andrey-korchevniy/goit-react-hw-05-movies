import { Wrapper, Img, Info } from "components/MovieInfo/MovieInfo.styled";
import PropTypes from 'prop-types';

export const MovieInfo = ({ data }) => {
    const { poster_path, title, release_date, vote_average, overview, genres } = data;

    return (
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
    )
}

MovieInfo.propTypes = {
  data: PropTypes.object
}