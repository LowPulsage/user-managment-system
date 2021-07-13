import { StyledButton } from "./Button.styles";

interface IButton {
    onClick: () => void,
    label: string
}

const Button: React.FC<IButton> = (props) => {
    const { onClick, label } = props;

    return <StyledButton onClick={onClick} >{label}</StyledButton>
}
export default Button