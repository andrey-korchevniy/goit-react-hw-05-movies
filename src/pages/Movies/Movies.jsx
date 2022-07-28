import { Button, ButtonWrapper, Input, SearchForm, FormikWrapper, Error } from './Movies.styled';
import { Formik } from 'formik';
import { useState, useEffect } from "react";
import { getMoviesSearch } from 'api/getMoviesList';
import { ListOfMovies, MovieItem, Poster, Title } from '../../pages/Home/Home.styled'
import { Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';

export const Movies = () => {

    const [query, setQuery] = useState('');           // a search word or frase
    const [movies, setMovies] = useState([]);
    const [total, setTotal] = useState(-1);

    // processing search-btn click
    const onSearch = (data) => {
        if (data.query !== query) {
            setQuery(() => data.query);
        }
    }

    useEffect(() => {
        getMoviesSearch(query)
            .then(data => {
                setMovies(data.results);
                setTotal(data.total_results);
            }).catch('error')
    }, [query]);

    if (total === -1) {
        return (      
            <Formik
                initialValues={{ query: '' }}
                onSubmit={onSearch}>
                <FormikWrapper>
                    <SearchForm>
                        <Input name='query' type="text" autoComplete="off" autoFocus placeholder="Search movies" />
                        <Error name='query' component='div' />
                        <ButtonWrapper>
                            <Button type="submit">Search</Button>
                        </ButtonWrapper>
                    </SearchForm>
                </FormikWrapper>
            </Formik>
        )

    } else if (total > 0) {
        return (
        <ListOfMovies as='main'>
            {movies.map(({ id, title, poster_path }) => (
                <MovieItem to={`${id}`} key={id}>
                    <Poster src={poster_path} alt='movie poster' />
                    <Title>{title}</Title>
                </MovieItem>))}
            <Outlet />
        </ListOfMovies>
        )
    } else {
        return (
        <ListOfMovies as='main'>
            {movies.map(({ id, title, poster_path }) => (
                <MovieItem to={`movies/${id}`} key={id}>
                    <Poster src={poster_path} alt='movie poster' />
                    <Title>{title}</Title>
                </MovieItem>))}
        </ListOfMovies>
        )
    }
}

