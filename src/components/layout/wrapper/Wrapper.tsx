import { StyledWrapper } from "./Wrapper.styles"


const Wrapper: React.FC = (props) => {
    return <StyledWrapper>
        {props.children}
    </StyledWrapper>
}
export default Wrapper