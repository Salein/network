import {combineReducers, legacy_createStore as createStore} from 'redux'
import { profileReducer } from './profile-reducer'
import { messagesReducer } from './messages-reducer'
import { usersReducer } from './users-reducer'
import { authReducer } from './auth-reducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)


export default store