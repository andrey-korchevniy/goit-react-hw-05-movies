import { Header, NavList, NavElement } from './AppBar.styled..js';
import { Link } from 'react-router-dom';

export const AppBar = () => {
    return (
        <Header>
            <NavList>
                <NavElement to='/'>Home</NavElement>
                <NavElement to='/movies'>Movies</NavElement>
            </NavList>
        </Header>
    )
}