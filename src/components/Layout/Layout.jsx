import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/Appbar/AppBar.jsx';


export const Layout = () => {
    return (
        <>
            <AppBar />
            <Outlet />
        </>
    )
}