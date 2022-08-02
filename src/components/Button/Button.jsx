import { BackLink } from "./Button.styled";

export const Button = ({ path, title }) => {
    return (
        <BackLink to={path}>
            {title}
        </BackLink>
    )
}