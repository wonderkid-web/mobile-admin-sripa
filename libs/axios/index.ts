import axios from "axios"

export const axiosPrayTime = axios.create({
    baseURL: 'https://api.aladhan.com/v1'
})
