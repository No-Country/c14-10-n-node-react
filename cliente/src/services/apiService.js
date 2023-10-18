
import axios from "axios";

const apiService = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const authUser = async (dates) => {

    const {data} = await apiService.post('/users/login', dates,{
        headers: {
                'Content-Type': 'application/json',       
        }
    })
    return data
}

export const registerUser = async (dates) => {

    const {data} = await apiService.post('/users/signup', dates,{
        headers: {
                'Content-Type': 'application/json',       
        }
    })
    return data
}

export const checkUser = async (token) => {

    const {data} = await apiService.get('/users/profile',{
        headers: {
                'Content-Type': 'application/json',
                'Authorization': token      
        }
    })
    return data
}