import { BackLink } from "./Nav.styled";

export const Nav = ({ path, title }) => {
    return (
        <BackLink to={path}>
            {title}
        </BackLink>
    )
}