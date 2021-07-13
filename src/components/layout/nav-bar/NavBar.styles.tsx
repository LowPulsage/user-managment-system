import styled from 'styled-components';


export const NavbarWrapper = styled.div`
    background: #eeb4fd;
    min-height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`

export const Section = styled.div`
    display: flex;
    flex-wrap: wrap; 
    &  > * {
            margin: 10px;
    }
`

export const LogoTitle= styled.h1`
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
`
