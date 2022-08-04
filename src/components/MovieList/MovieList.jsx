import { ListOfMovies, MovieItem, Poster, Title } from './MovieList.styled';
import PropTypes from 'prop-types';

export const MovieList = ({ list, location, pagePath }) => {
    return (
        <ListOfMovies as='div'>
            {list.map(({ id, title, poster_path }) => (
                <MovieItem to={`${pagePath}${id}`} key={id} state={{ from: location }}>
                    <Poster src={poster_path} alt='movie poster' />
                    <Title>{title}</Title>
                </MovieItem>))}
        </ListOfMovies>
    )
}

MovieList.propTypes = {
    list: PropTypes.array,
    location: PropTypes.object,
    pagePath: PropTypes.string
}