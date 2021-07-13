export interface IModal {
    isOpen: boolean,
    onClose: () => void
}


export enum ModalNames {
    createUserModal,
    createGroupModal,
    userDetailsModal,
    groupDetailsModal
}

export interface IModalsState {
    openedModalName: ModalNames | ''
    selectedUserId: string
}

export interface IOpenUserDetailsProps {
    userId: string
}