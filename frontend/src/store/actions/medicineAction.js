import axios from 'axios'
import { NotificationManager } from 'react-notifications';
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