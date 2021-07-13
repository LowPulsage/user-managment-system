import { Button, TextField } from "@components/forms";
import Modal from "@components/modal/Modal"
import { closeModal } from "@store/modals/modals.slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateGroupWrapper } from "./CreateGroupModal.styles";
import { toast } from 'react-toastify';
import { createGroup } from "@store/groups/groups.slice";

const CreateGroupModal: React.FC = (props) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('')


    const handleChangeGroupName = (event: any) => {
        setName(event.target.value)
    }

    const handleCloseModal = () => {
        dispatch(closeModal())
    }

    const handleSubmit = () => {
        if (name.length) {
            dispatch(createGroup({
                name
            }))
            handleCloseModal()
        } else {
            toast.error('please, fill group name',)
        }
    }

    return <Modal isOpen={true} onClose={handleCloseModal}>
        <CreateGroupWrapper>
            <TextField label='Group name' name='group-name' placeholder='enter group name' onChange={handleChangeGroupName} value={name} />
            <Button onClick={handleSubmit} label='Submit' />
        </CreateGroupWrapper>
    </Modal>
}

export default CreateGroupModal