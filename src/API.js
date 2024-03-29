import axios from 'axios';
import InterceptorGET from './InterceptorGET';

// For GET requests
axios.interceptors.request.use(
    (req) => {
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
      // Add configurations here
      if (res.status === 201) {
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
    'school': '/school/',
    'department': '/department/',
    'livestreamsnotification': '/livestreamsnotification/',
    'frequentlyquestions': '/frequentlyquestions/',
    'comment': '/comment/',
    'livestreamscomment': '/livestreamscomment/'
}

export let port = {
   'baseURL': 'http://localhost:8000',
}
const API = axios.create({
    baseURL: "http://localhost:8000",

});

InterceptorGET(API);

export default API;


