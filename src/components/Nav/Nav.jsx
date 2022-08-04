import { BackLink } from "./Nav.styled";
import PropTypes from 'prop-types';

export const Nav = ({ path, title }) => {
    return (
        <BackLink to={path}>
            {title}
        </BackLink>
    )
}

Nav.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
}