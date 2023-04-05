import jwt_decode from "jwt-decode";
const InterceptorGET = (axiosInstance) => {

   axiosInstance.interceptors.request.use((req) => {
      if (window.location.href.includes('/admin')) {
         // let token = localStorage.getItem('token');
         // if (!token) {
         //    window.location.href = '/admin-login';
         // } else {
         //    var decoded = jwt_decode(token);
         //    if (decoded.exp < Date.now() / 1000) {
         //       window.location.href = '/admin-login';
         //    }
         // }
      }
      // Add configurations here
      return req;
   },
      (err) => {
         return Promise.reject(err);
      });

};

export default InterceptorGET;