import { Header, NavList, NavElement } from './AppBar.styled.js';

export const AppBar = () => {
    return (
        <Header>
            <NavList>
                <NavElement to='/'>Home</NavElement>
                <NavElement to='movies'>Movies</NavElement>
            </NavList>
        </Header>
    )
}