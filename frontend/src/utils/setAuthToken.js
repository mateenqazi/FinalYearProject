import axios from 'axios';
const setAuthToken = token => {
    console.log('hello auth token')
    if (token) {
        console.log('enter in if ', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        console.log('enter in else ', token)
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;
