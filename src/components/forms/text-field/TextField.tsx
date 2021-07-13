import { StyledTextInput, StyledTextInputLabel, TextFieldWrapper } from "./TextField.styles";

export interface ITextFieldProps {
    label: string
    name: string
    placeholder?: string
    type?: string
    value: string
    onChange: (props: any) => void
}

const TextField: React.FC<ITextFieldProps> = (props) => {
    const { label, name, placeholder = '', type = 'text', ...other } = props
    const textFieldId = `text-field-${name}-id`

    return <TextFieldWrapper>
        <StyledTextInputLabel htmlFor={textFieldId}>
            {label}:
        </StyledTextInputLabel>
        <StyledTextInput name={name} id={textFieldId} placeholder={placeholder} type={type} {...other} />
    </TextFieldWrapper>
}

export default TextField;