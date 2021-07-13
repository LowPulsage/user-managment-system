import { RootState } from "..";

export const getOpenedModalName = (state: RootState) => state.modals.openedModalName
export const getSelectedUserId = (state: RootState) => state.modals.selectedUserId