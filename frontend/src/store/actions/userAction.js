import axios from 'axios'
import {
    GET_USER_DATA
} from './types'
import { NotificationManager } from 'react-notifications';


const backendServerURL = process.env.REACT_APP_API_URL

export const getUserInfo = (id) => dispatch => {
    axios.get(backendServerURL + '/user?id=' + id)
        .then(res => {
            console.log('res', res.data)
            dispatch({ type: GET_USER_DATA, payload: res.data })

        })
        .catch(err => {
            dispatch({ type: GET_USER_DATA, payload: null })
        })
}

export const editUserInfo = (data, history) => dispatch => {
    axios.put(backendServerURL + '/user/edit_user', data)
        .then(res => {
            console.log('res', res.data)
            dispatch({ type: GET_USER_DATA, payload: res.data })
            NotificationManager.success('Edit Profile Sucessfully.');
            history.push("/")
        })
        .catch(err => {
            dispatch({ type: GET_USER_DATA, payload: null })
            NotificationManager.error('Something getting Wrong!');
        })
}

export const updateProfilePicture = (data, history) => dispatch => {
    axios.put(backendServerURL + '/user/edit_picture', data)
        .then(res => {
            console.log('res', res.data)
            dispatch({ type: GET_USER_DATA, payload: res.data })
            NotificationManager.success('Profile Picture Sucessfully Updated.');
            history.push("/")
        })
        .catch(err => {
            dispatch({ type: GET_USER_DATA, payload: null })
            NotificationManager.error('Something getting Wrong!');
        })
}

export const submitStar = (data) => dispatch => {
    axios.put(backendServerURL + '/user/submit_star', data)
        .then(res => {
            console.log('res', res.data)
            dispatch({ type: GET_USER_DATA, payload: res.data })
            NotificationManager.success('Rating Submitted.');
        })
        .catch(err => {
            dispatch({ type: GET_USER_DATA, payload: null })
            NotificationManager.error('Something getting Wrong!');
        })
}


export const reportUser = (data) => dispatch => {
    axios.put(backendServerURL + '/user/report_user', data)
        .then(res => {

            dispatch({ type: GET_USER_DATA, payload: res.data })
            NotificationManager.success('User Reported.');
        })
        .catch(err => {
            dispatch({ type: GET_USER_DATA, payload: null })
            NotificationManager.error('Something getting Wrong!');
        })
}

