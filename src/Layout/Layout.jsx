import { Outlet } from 'react-router-dom';
import { Header, NavList, Container, Spinner } from './Layout.styled.js';
import { Suspense } from "react";
import { Button } from 'components/Button/Button';
import { Grid } from 'react-loader-spinner';

export const Layout = () => {
    return (
        <Container>
            <Header>
                <NavList>
                    <Button path='/' title='Home' />
                    <Button path='movies' title='Movies' />
                </NavList>
            </Header>
            <Suspense fallback={<Spinner><Grid color="#0591ba" height={35} width={35} /></Spinner>}>
                <Outlet />
            </Suspense>
        </Container>
    )
}


