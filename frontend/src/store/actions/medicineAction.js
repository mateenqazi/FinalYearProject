import axios from 'axios'
import { NotificationManager } from 'react-notifications';
import { GET_ALL_MEDICINE, GET_SINGLE_MEDICINE } from './types'
const backendServerURL = process.env.REACT_APP_API_URL
export const AddMedicineApi = (data, history) => dispatch => {
    axios.post(backendServerURL + '/medicine/add', data)
        .then(res => {
            NotificationManager.success('Add Medicine Successfully!');
            history.push('/')

        })
        .catch(err => {
        })
}

export const getAllMedicine = () => dispatch => {
    axios.get(backendServerURL + '/medicine/all')
        .then(res => {
            console.log('res', res.data)
            dispatch({ type: GET_ALL_MEDICINE, payload: res.data })
            //NotificationManager.success('Add Medicine Successfully!');
        })
        .catch(err => {
            dispatch({ type: GET_ALL_MEDICINE, payload: null })

        })
}

export const singleMedicine = (id) => dispatch => {
    axios.get(backendServerURL + '/medicine/single?id=' + id)
        .then(res => {
            console.log('res', res.data)
            dispatch({ type: GET_SINGLE_MEDICINE, payload: res.data })
            //NotificationManager.success('Add Medicine Successfully!');
        })
        .catch(err => {
            dispatch({ type: GET_SINGLE_MEDICINE, payload: null })

        })
}