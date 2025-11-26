import axios from 'axios';


const jwt = localStorage.getItem('jwtToken');

// const API_BASE_URL = 'https://fictional-space-enigma-9ggw49pj45727xw7-3080.app.github.dev';
export const API_BASE_URL = 'http://localhost:3080';


const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
    },
});

export default api;