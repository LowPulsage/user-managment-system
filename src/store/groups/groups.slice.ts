import { groupsInitialState } from "@utils/constants/groups.constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAddUserToGroupsPayload, ICreateGroupPaylaod, IDeleteGroup, IDeleteUserFromAllGroups, IDeleteUserFromGroup, IGroup } from "@interfaces/groups.types";
import { v4 as uuidv4 } from "uuid";


const initialState: IGroup[] = groupsInitialState

const groupReducer = createSlice(
    {
        name: "groups",
        initialState: initialState,
        reducers: {
            createGroup(state, action: PayloadAction<ICreateGroupPaylaod>) {
                const newGroup = {
                    ...action.payload,
                    id: uuidv4(),
                    userIds: []
                }

                state.push(newGroup);
            },
            addUserToGroups(state, action: PayloadAction<IAddUserToGroupsPayload>) {
                action.payload.groupIds.forEach(id => {
                    const foundIndex = state.findIndex(i => i.id === id);
                    if (foundIndex !== -1) {
                        state[foundIndex].userIds.push(action.payload.userId)
                    }
                })
            },
            deleteUserFromAllGroup(state, action: PayloadAction<IDeleteUserFromAllGroups>) {
                state.forEach((item, index) => {
                    const foundIndex = state[index].userIds.findIndex(i => i === action.payload.userId)
                    if (foundIndex > -1)
                        state[index].userIds.splice(foundIndex, 1)
                })
            },
            deleteUserFromGroup(state, action: PayloadAction<IDeleteUserFromGroup>) {
                const foundGroupIndex = state.findIndex(i => i.id === action.payload.groupId)
                if (foundGroupIndex > -1) {
                    const foundUserIndex = state[foundGroupIndex].userIds.findIndex(i => i === action.payload.userId)
                    if (foundUserIndex > -1) {
                        state[foundUserIndex].userIds.splice(foundUserIndex, 1)
                    }
                }
            },
            deleteGroup(state, action: PayloadAction<IDeleteGroup>) {
                const groupIndex = state.findIndex(i => i.id === action.payload.groupId)
                if(groupIndex > -1) {
                    if(state[groupIndex].userIds.length === 0) {
                        state.splice(groupIndex, 1)
                    }
                }
            }
        }
    }
)

const { actions, reducer } = groupReducer
export const { createGroup, addUserToGroups } = actions
export default reducer