import axios from 'axios'
import { NotificationManager } from 'react-notifications';
import {
    GET_ALL_POST
} from './types';

const backendServerURL = process.env.REACT_APP_API_URL

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

export const getAllPost = () => dispatch => {
    axios.get(backendServerURL + '/post/all')
        .then(res => {
            dispatch({ type: GET_ALL_POST, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_ALL_POST, payload: null })
            console.log('error', err.response.request.response)
            NotificationManager.error(err.response.request && err.response.request.response);
        })
}