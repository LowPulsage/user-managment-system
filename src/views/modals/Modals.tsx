import CreateGroupModal from "@components/create-group-modal/CreateGroupModal";
import CreateUserModal from "@components/create-user-modal/CreateUserModal";
import UserDetailsModal from "@components/user-details-modal/UserDetailsModal";
import { ModalNames } from "@interfaces/modal.types";
import { getOpenedModalName } from "@store/modals/modals.selectors"
import { useSelector } from "react-redux"

const Modals: React.FC = props => {
    const openedModalName = useSelector(getOpenedModalName);

    const renderModal = () => {
        switch (openedModalName) {
            case ModalNames.createGroupModal:
                return <CreateGroupModal />
            case ModalNames.createUserModal:
                return <CreateUserModal />
            case ModalNames.groupDetailsModal:
                return <div></div>
            case ModalNames.userDetailsModal:
                return <UserDetailsModal />
            default: return null
        }
    }

    return renderModal()
}

export default Modals