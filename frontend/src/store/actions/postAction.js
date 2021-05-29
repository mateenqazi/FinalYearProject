import axios from 'axios'
import {
    SET_USER
} from './types'
import { NotificationManager } from 'react-notifications';


const backendServerURL = process.env.REACT_APP_API_URL
const dummyURL = process.env.REACT_APP_BASE_URL

export const createPost = (data, history) => dispatch => {
    axios.post(backendServerURL + '/post/create_post', data)
        .then(res => {
            NotificationManager.success('Post Successfully Uploaded');
            history.push('/')
        })
        .catch(err => {
            console.log('error', err.response.request.response)
            NotificationManager.error(err.response.request && err.response.request.response);
        })
}

export const SignupApi = (data, history) => dispatch => {
    console.log(data)
    axios.post(backendServerURL + '/auth/signup', data)
        .then(res => {
            NotificationManager.success('User Signup Successfully');
            history.push('/')
        })
        .catch(err => {
            console.log('error', err.response.request.response)
            NotificationManager.error(err.response.request && err.response.request.response);
        })
}