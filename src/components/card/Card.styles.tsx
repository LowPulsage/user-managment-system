import styled from "styled-components";


export const CardWrapper = styled.div`
    background: #bd69ba;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    transition: all 0.2s ease-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.1)
    }
`