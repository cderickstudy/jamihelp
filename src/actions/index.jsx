import { API_URL } from '../constants/config'
import axios from 'axios'

export const uploadFile = async (formData) => {
    if(!formData) return null
    try {
        const response = await axios.post(API_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response.data
    } catch (err) {
        console.log(err)
        return false
    }
}