import { GET_ALL_POST } from '../actions/types'
const initialState = {
    posts: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POST:
            return {
                ...state,
                posts: action.payload ? action.payload : null
            }
        default:
            return state
    }
}