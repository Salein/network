import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7523130a-8e26-46ec-bb34-39239cc89e1a"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    }}

export const getUsers = (currentPage = 1, pageSize = 5) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
        return response.data
    })
}
