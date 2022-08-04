import { Outlet } from 'react-router-dom';
import { Header, NavList, Container } from './Layout.styled.js';
import { Nav } from 'components/Nav/Nav';

const Layout = () => {
    return (
        <Container>
            <Header>
                <NavList>
                    <Nav path='/' title='Home' />
                    <Nav path='movies/' title='Movies' />
                </NavList>
            </Header>
            <main >
                <Outlet />
            </main>
        </Container>
    )
}

export default Layout;

