import { GET_ALL_MEDICINE, GET_SINGLE_MEDICINE } from '../actions/types'
const initialState = {
    medicine: null,
    singleMedicine: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_MEDICINE:
            return {
                ...state,
                medicine: action.payload ? action.payload : null
            }
        case GET_SINGLE_MEDICINE:
            return {
                ...state,
                singleMedicine: action.payload ? action.payload : null
            }
        default:
            return state
    }
}