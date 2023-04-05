import axios from 'axios';
import InterceptorGET from './InterceptorGET';

// For GET requests
axios.interceptors.request.use(
    (req) => {
     console.log('gagag');
       // Add configurations here
       return req;
    },
    (err) => {
       return Promise.reject(err);
    }
 );
 
 // For POST requests
 axios.interceptors.response.use(
   (res) => {
     console.log('Posted POST');
      // Add configurations here
      if (res.status === 201) {
         console.log('Posted Successfully');
      }
      return res;
   },
   (err) => {
      return Promise.reject(err);
   }
 );

export let endpoints = {
    'authenticate': '/api/token/',
    'user': '/user/',
    'admissionType': '/admission-type/',
    'admission': '/admission/',
    'banner': '/banner/',
}
const API = axios.create({
    baseURL: "http://localhost:8000",

});

InterceptorGET(API);

export default API;


