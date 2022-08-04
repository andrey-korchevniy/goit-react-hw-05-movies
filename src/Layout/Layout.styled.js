import styled from "styled-components";
import bg from 'images/bg.png';

export const Container = styled.div`
  max-width: 960px;
  margin: 150px auto;
  padding: 0 16px;
`
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
