import axios from 'axios'
export let endpoints = {
    'authenticate': '/api/token/',
    'user': '/user/',
    'admissionType': '/admission-type/',
    'admission': '/admission/',
}
export default axios.create({
    baseURL: "http://localhost:8000"
})