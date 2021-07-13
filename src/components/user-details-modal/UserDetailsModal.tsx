

import Modal from '@components/modal/Modal';
import Title from '@components/title/Title';
import { getGroupsByUserId } from '@store/groups/groups.selectors';
import { closeModal } from '@store/modals/modals.slice';
import { useDispatch, useSelector } from 'react-redux'
import { UserDetailsModalWrapper } from './UserDetailsModal.styles'

const UserDetailsModal: React.FC = (props) => {
    const groups = useSelector(getGroupsByUserId);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(closeModal())
    }

    return (
        <Modal isOpen={true} onClose={handleCloseModal}>

            <UserDetailsModalWrapper>
                {
                    groups.map(group => {
                        return <Title text={group.name} color={'#000'} />
                    })
                }
            </UserDetailsModalWrapper>
        </Modal>

    )
}

export default UserDetailsModal
