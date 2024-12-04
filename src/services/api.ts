import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-lp36.onrender.com/' // Assurez-vous que l'URL correspond à votre backend
});

export default api;
