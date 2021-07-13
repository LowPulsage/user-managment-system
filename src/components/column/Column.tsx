import { StyledColumn } from "./Column.styles"

const Column: React.FC = props => {
    return <StyledColumn>
        {props.children}
    </StyledColumn>
}

export default Column