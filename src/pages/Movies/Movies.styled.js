import styled from 'styled-components';
import { Box } from 'utils/Box';

export const FindText = styled.p`
    font-size: large;
    margin-bottom: 20px;
`
export const FindBlock = styled.div`
    text-align: center;
    margin-top: 150px;
`
export const ListOfMovies = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    margin-top: 150px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    gap: 10px;
`