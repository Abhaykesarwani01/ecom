import axios from 'axios';

// const API_BASE_URL = 'https://fictional-space-enigma-9ggw49pj45727xw7-3080.app.github.dev';
export const API_BASE_URL = 'http://localhost:3080';

const jwt = localStorage.getItem('jwtToken');

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
    },
});
