
import React from 'react'
import { IModal } from '@interfaces/modal.types'
import { StyledModal } from './Modal.styled'
import { CrossButton } from '@components/forms'


const customStyles = {
    overlay: {
        backgroundColor: '#fff',
    },
};

const Modal: React.FC<IModal> = (props) => {

    return (
        <StyledModal isOpen={props.isOpen} style={customStyles} >
            <CrossButton label='close' onClick={props.onClose} />
            {props.children}
        </StyledModal>
    )
}

export default Modal