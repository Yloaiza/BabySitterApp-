import axios from "axios"

const usersApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/BabySitter/api/v1/users/'
})

export const getAllUsers = () => usersApi.get('/');

export const getUsers = (id) => usersApi.get(`/${id}/`)

export const createUsers = (users) => usersApi.post('/', users)

export const deleteUsers = (id) => usersApi.delete(`/${id}/`)

export const updateUsers = (id, users) => usersApi.put(`/${id}/`,users)

export const getUserByEmail = (email) => usersApi.get('/', { params: { email } });