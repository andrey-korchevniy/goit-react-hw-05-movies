import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const BackLink = styled(NavLink)`
    color: white;
    margin-left: 10px;
    width: 100px;
    padding: 5px 5px;
    text-align:center;
    background: #00a2d3;
    background-image: -webkit-linear-gradient(top, #00a2d3, #0d7796);
    background-image: -moz-linear-gradient(top, #00a2d3, #0d7796);
    background-image: -o-linear-gradient(top, #00a2d3, #0d7796);
    background-image: linear-gradient(to bottom, #00a2d3, #0d7796);
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