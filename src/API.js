import axios from 'axios'
export let endpoints = {
    'authenticate': '/api/token/',
}
export default axios.create({
    baseURL: "http://localhost:8000"
})