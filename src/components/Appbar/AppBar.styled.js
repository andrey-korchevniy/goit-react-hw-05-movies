import styled from "styled-components";
import bg from 'images/bg.png';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: block;
    background: #373737 url(${bg}) 0 0 repeat;
`
export const NavList = styled.nav`
    display: flex;
    justify-content: center;
    grid-column-gap: 50px;
    margin-block-start: 11px;
    padding-inline-start: 0;
`
export const NavElement = styled(NavLink)`
    width: 80px;
    padding: 5px 10px;
    text-align:center;
    background: #00a2d3;
    background-image: -webkit-linear-gradient(top, #00a2d3, #0d7796);
    background-image: -moz-linear-gradient(top, #00a2d3, #0d7796);
    background-image: -o-linear-gradient(top, #00a2d3, #0d7796);
    background-image: linear-gradient(to bottom, #00a2d3, #0d7796);
    box-shadow: inset 0 0 0 1px #00a2d3, 0 0 0 5px rgba(0, 0, 0, 0.16);
    color: white;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    
    :hover {
        background: #0591ba;
        background-image: -webkit-linear-gradient(top, #0591ba, #00a2d3);
        background-image: -moz-linear-gradient(top, #0591ba, #00a2d3);
        background-image: -o-linear-gradient(top, #0591ba, #00a2d3);
        background-image: linear-gradient(to bottom, #0591ba, #00a2d3);
    }

    :active {
        background: #00a2d3;
    }

    &.active {
        background: #0d7796;
    }
`