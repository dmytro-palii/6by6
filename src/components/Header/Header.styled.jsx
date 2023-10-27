import styled from "styled-components"


export const Header = styled.header`
    padding-top: 8px;
    padding-bottom: 8px;
    width: 1200px;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    align-items: center;
    gap: 40px;
    border-bottom: 1px solid #fff;
    position: fixed;
    background-color: transparent;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
`
export const Logo = styled.img`
    width: 80px;
    height: 80px;
`
export const List = styled.ul`
    display: flex;
    gap: 40px;
`