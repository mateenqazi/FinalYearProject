import { GET_USER_DATA } from '../actions/types'
const initialState = {
    profile: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA:
            return {
                ...state,
                profile: action.payload ? action.payload : null
            }
        default:
            return state
    }
}