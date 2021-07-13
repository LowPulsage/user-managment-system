import { ICrose } from "@interfaces/crose-button.types"
import { CrossButtonContainer, CrossButtonLabel, CrossButtonLeftRight, CrossButtonRightLeft } from "./CrossButton.styles"

const CrossButton: React.FC<ICrose> = (props) => {
    const { alignRight = true} = props

    return (
        <CrossButtonContainer onClick={props.onClick} alignRight={alignRight}>
            <CrossButtonLeftRight />
            <CrossButtonRightLeft />
            <CrossButtonLabel>{props.label}</CrossButtonLabel>
        </CrossButtonContainer>
    )
}

export default CrossButton
