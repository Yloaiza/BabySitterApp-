import axios from "axios"

const reservationApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/BabySitter/api/v1/reservations/'
})

export const getAllReservation = () => reservationApi.get('/');

export const getReservation = (id) => reservationApi.get(`/${id}/`)

export const createReservation = (reservation) => reservationApi.post('/', reservation)

export const deleteReservation = (id) => reservationApi.delete(`/${id}/`)

export const updateReservation = (id, reservation) => reservationApi.put(`/${id}/`,reservation)
