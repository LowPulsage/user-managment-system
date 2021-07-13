import { ITitle } from "@interfaces/title.types"
import { StyledTitle } from "./Title.styles"


const Title:React.FC<ITitle> = (props) => {
    const { color = '#fff'} = props
    
    return <StyledTitle color={color}>
        {props.text}
    </StyledTitle>
}

export default Title