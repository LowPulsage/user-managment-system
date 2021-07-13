import { StyledCenter } from "./Center.styles"


const Center: React.FC = props => {
    return <StyledCenter>
        {props.children}
    </StyledCenter>
}

export default Center;