import { SET_USER } from '../actions/types'
const initialState = {
    isAuthenticated: false,
    user: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isAuthenticated: action.payload ? true : false,
                user: action.payload ? action.payload : null
            }
        default:
            return state
    }
}