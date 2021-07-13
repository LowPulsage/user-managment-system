import styled from "styled-components";

const softorange = '#F4A259';
const tomatored = '#F25C66';
// const mediumblu = '#1E272D';


export const CrossButtonLeftRight = styled.div`
    height: 4px;
    width: 50px;
    position: absolute;
    margin-top: 24px;
    background-color: ${softorange};
    border-radius: 2px;
    transform: rotate(45deg);
    transition: all .3s ease-in;
`
export const CrossButtonRightLeft = styled.div`
    height: 4px;
    width: 50px;
    position: absolute;
    margin-top: 24px;
    background-color: ${softorange};
    border-radius: 2px;
    transform: rotate(-45deg);
    transition: all .3s ease-in;
`

export const CrossButtonLabel = styled.label`
    color: white;
    font-family: Helvetica, Arial, sans-serif; 
    font-size: .6em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all .3s ease-in;
    opacity: 0;
    margin: 60px 0 0 5px;
    position: absolute;

`

export const CrossButtonContainer = styled.div<{ alignRight: boolean }>`
    position: relative;
    ${p => p.alignRight ? `
        left: 100%;
        transform: translateX(-100%);
    ` : ""}
    width: 50px;
    height: 50px;
    cursor: pointer;
    &:hover ${CrossButtonLeftRight}{
        transform: rotate(-45deg);
        background-color: ${tomatored};
    }
    &:hover ${CrossButtonRightLeft}{
        transform: rotate(45deg);
        background-color: ${tomatored};
    }

    :hover ${CrossButtonLabel}{
        opacity: 1;
    }
`

