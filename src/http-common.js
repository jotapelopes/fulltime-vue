import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:5104/api",
    headers: {
        "Content-Type": "application/json"
    }
});

// Adicionar um interceptor para incluir o header de authorization em todas as requisições
http.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default http;