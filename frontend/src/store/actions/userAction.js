import axios from 'axios'
import {
    GET_USER_DATA
} from './types'
import { NotificationManager } from 'react-notifications';


const backendServerURL = process.env.REACT_APP_API_URL
const dummyURL = process.env.REACT_APP_BASE_URL

export const getUserInfo = (id) => dispatch => {
    axios.get(backendServerURL + '/user?id=' + id)
        .then(res => {
            console.log('res', res.data)

        })
        .catch(err => {
        })
}

