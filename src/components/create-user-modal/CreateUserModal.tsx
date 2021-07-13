import { Button, TextField } from "@components/forms"
import Modal from "@components/modal/Modal"
import Title from "@components/title/Title"
import { getGroups } from "@store/groups/groups.selectors"
import { addUserToGroups } from "@store/groups/groups.slice"
import { closeModal } from "@store/modals/modals.slice"
import { createUser } from "@store/users/users.slice"
import { isNotEmpyFields } from "@utils/helpers/isNotEmptyField"
import { IOption, parseGroupsToOption } from "@utils/helpers/parseGroupsToOption"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  toast } from 'react-toastify';
import { v4 as uuidv4 } from "uuid";


import { CreateUserWrapper, StyledSelect } from "./CreateUserModal.styles"


const fieldsInitialState = {
    name: '',
    email: ''
}

const CreateUserModal = () => {
    const dispatch = useDispatch();
    const [fields, setFields] = useState(fieldsInitialState);

    const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

    const groups = useSelector(getGroups);
    const options = parseGroupsToOption(groups);

    const handleSubmit = () => {
        if (isNotEmpyFields(fields) && selectedGroups.length) {
            const newUserId = uuidv4();

            const newUser = {
                id: newUserId,
                ...fields,
            }

            dispatch(createUser(newUser))
            dispatch(addUserToGroups({
                userId: newUserId,
                groupIds: selectedGroups
            }))
            handleCloseModal()
        }else {
            toast.error('fill in all the fields', )
        }
    }

    const handleChangeInput = (fieldName: string) => (event: any) => {
        setFields({
            ...fields,
            [fieldName]: event.target.value
        })
    }

    const handleSelectChange = (items: IOption[]) => {
        setSelectedGroups(items.map(item => item.value));
    }


    const handleCloseModal = () => {
        dispatch(closeModal())
    }

    return (
        <Modal isOpen={true} onClose={handleCloseModal}>
            <CreateUserWrapper>
                <TextField label='Name' name='user-name' placeholder='enter user name' onChange={handleChangeInput('name')} value={fields.name} />
                <TextField label='Email' name='user-email' placeholder='enter user email' type='email' onChange={handleChangeInput('email')} value={fields.email} />
                <Title text='Groups' color='black' />
                <StyledSelect options={options} isMulti placeholder='select user groups' onChange={handleSelectChange} />
                <Button onClick={handleSubmit} label='Submit' />
            </CreateUserWrapper>
        </Modal>
    )
}

export default CreateUserModal
