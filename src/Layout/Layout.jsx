import { Outlet } from 'react-router-dom';
import { Header, NavList, Container, Nav } from './Layout.styled.js';

const Layout = () => {
    return (
        <Container>
            <Header>
                <NavList>
                    <Nav to='/'>Home</Nav>
                    <Nav to='movies/'>Movies</Nav>
                </NavList>
            </Header>
            <main >
                <Outlet />
            </main>
        </Container>
    )
}

export default Layout;

