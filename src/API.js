import axios from 'axios'
export let endpoints = {
    'authenticate': '/api/token/',
    'user': '/user/',
}
export default axios.create({
    baseURL: "http://localhost:8000"
})