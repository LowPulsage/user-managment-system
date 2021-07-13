import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './users/users.slice';
import groupReducer from './groups/groups.slice';
import modalReducer from './modals/modals.slice';

const rootReducer = combineReducers({
    users: userReducer,
    groups: groupReducer,
    modals: modalReducer
})

export default rootReducer