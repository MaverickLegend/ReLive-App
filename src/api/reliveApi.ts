import axios from 'axios';

const reliveApi = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

reliveApi.interceptors.request.use((config) => {

    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export { reliveApi };
