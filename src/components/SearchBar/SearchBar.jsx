import { Formik } from 'formik';
import { Button, ButtonWrapper, Input, SearchForm, FormikWrapper, Error } from './SearchBar.styled';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSearch, queryText }) => {
    return (
        <Formik
            initialValues={{ query: queryText }}
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
}

SearchBar.propTypes = {
    onSearch: PropTypes.func,
}