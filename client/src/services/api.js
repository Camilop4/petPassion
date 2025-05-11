import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api'; // Ajusta la URL base de tu backend

const api = axios.create({
  baseURL: baseURL,
});

export default api;