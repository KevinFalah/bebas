import axios from 'axios'

const API = axios.create({
    baseUrl: "http://localhost:3000/api/v1/",
    withCredentials: true,
})

API.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
API.defaults.withCredentials = true;
API.defaults.crossDomain = true;

export default API