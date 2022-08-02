import { Outlet } from 'react-router-dom';
import { Header, NavList, Container } from './Layout.styled.js';
import { Suspense } from "react";
import { Button } from 'components/Button/Button';

export const Layout = () => {
    return (
        <Container>
            <Header>
                <NavList>
                    <Button path='/' title='Home' />
                    <Button path='movies' title='Movies' />
                </NavList>
            </Header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </Container>
    )
}