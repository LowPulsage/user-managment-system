import styled from "styled-components";
import Select from 'react-select'


export const CreateUserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center; 
`

export const StyledSelect = styled(Select)`
    max-width: 360px;
    padding: 10px 0;
    width: 100%;
`