import axios from "axios"

export const axiosPrayTime = axios.create({
    baseURL: 'https://api.aladhan.com/v1'
})

export const axiosAlquran = axios.create({
    baseURL: 'http://api.alquran.cloud/v1'
})