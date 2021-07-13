import { StyledSectionTitle } from "./SectionTitle.styles"

const SectionTitle: React.FC = props => {
    return <StyledSectionTitle>
        {props.children}
    </StyledSectionTitle>
}

export default SectionTitle