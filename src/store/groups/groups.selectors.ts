import { createSelector } from "@reduxjs/toolkit";
import { getSelectedUserId } from "@store/modals/modals.selectors";
import { RootState } from "..";

export const getGroups = (state: RootState) => state.groups

export const getGroupsByUserId = createSelector(getGroups, getSelectedUserId, (groups, userId) => {
    return groups.filter(group => group.userIds.includes(userId));
})