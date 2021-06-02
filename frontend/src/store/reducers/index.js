import { combineReducers } from 'redux';
import auth from './authReducer'
import user from './userReducer'
import post from './postReducer'
import medicine from './medicineReducer'

export default combineReducers({
    auth: auth,
    user: user,
    post: post,
    medicine: medicine
})