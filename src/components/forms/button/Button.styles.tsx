import styled from 'styled-components'

export const StyledButton = styled.button`
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    background: #ff77cf;
    color: white;
    &:hover {
        background-color: #f34cb8;
        cursor: pointer;
    }
     &:active {
        background-color: #f71ba9;
    }
    
`