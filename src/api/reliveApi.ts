import axios from 'axios';

const reliveApi = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export { reliveApi };
