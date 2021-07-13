import { usersInitialState } from "@utils/constants/users.constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDeleteUserPayload, IUser } from "@interfaces/users.types";



const initialState: IUser[] = usersInitialState

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        createUser(state, action: PayloadAction<IUser>) {
            state.push(action.payload)
        },
        deleteUser(state, action: PayloadAction<IDeleteUserPayload>) {
            const foundIndex = state.findIndex(user => user.id = action.payload.userId)
            if (foundIndex > -1) {
                state.splice(foundIndex, 1)
            }
        }
    }

})

const { actions, reducer } = userSlice

export const { createUser } = actions
export default reducer