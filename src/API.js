import axios from 'axios'
export let endpoints = {
    'authenticate': '/api/token/',
    'user': '/user/',
    'admissionType': '/admission-type/',
    'admission': '/admission/',
    'banner': '/banner/',
}
export default axios.create({
    baseURL: "http://localhost:8000"
})