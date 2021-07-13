import { IModalsState, IOpenUserDetailsProps, ModalNames } from "@interfaces/modal.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { modalsInitialState } from "@utils/constants/modals.constants";

const initialState = modalsInitialState as IModalsState

const modalsSlice = createSlice({
    name: "modals",
    initialState: initialState,
    reducers: {
        openCreateUserModal(state) {
            state.openedModalName = ModalNames.createUserModal
        },
        openCreateGroupModal(state) {
            state.openedModalName = ModalNames.createGroupModal
        },
        openUserDetailModal(state, action: PayloadAction<IOpenUserDetailsProps>) {
            state.openedModalName = ModalNames.userDetailsModal
            state.selectedUserId = action.payload.userId
        },
        openGroupDetailModal(state) {
            state.openedModalName = ModalNames.groupDetailsModal
        },
        closeModal(state) {
            if (state.openedModalName === ModalNames.userDetailsModal)
                state.selectedUserId = ''
            state.openedModalName = ''
        }
    }
})

const { actions, reducer } = modalsSlice

export const { closeModal, openCreateGroupModal, openCreateUserModal, openGroupDetailModal, openUserDetailModal } = actions
export default reducer