import nothing from '../../images/nothing.png';
import { FindBlock, FindText } from './SearchBlock.styled';
import PropTypes from 'prop-types';
                   
export const SearchBlock = ({ message }) => {
    return (
        <FindBlock as='div' >
            <FindText>{message}</FindText>
            <img src={nothing} alt='nothing is found'/>
        </FindBlock>
    )
}

SearchBlock.propTypes = {
    message: PropTypes.string,
}