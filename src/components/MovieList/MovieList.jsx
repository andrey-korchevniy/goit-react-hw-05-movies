import { ListOfMovies, MovieItem, Poster, Title } from './MovieList.styled';


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