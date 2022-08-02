import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { Box } from 'utils/Box';

export const ListOfMovies = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    gap: 10px;
`
export const MovieItem = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: calc((100% - 100px)/5);
    background: none;
    color: black;
    text-align: center;
    border-radius: 3px;
    box-shadow: inset 0 0 0 1px #00a2d3, 0 0 0 2px rgba(0, 0, 0, 0.16);

    :hover {
        box-shadow: inset 0 0 0 1px #00a2d3, 0 0 0 3px rgba(0, 0, 0, 0.4);
        background: #f0f0f0;
    }
`
export const Poster = styled.img`
    display: block;
    width: 100%;
`
export const Title = styled.p`
    padding: 0 5px;
    margin-block-end: 0;
    margin-block-start: 0;
`
export const H1 = styled.h1`
    display: block;
    margin-top: 80px;
    text-align: center;
`
