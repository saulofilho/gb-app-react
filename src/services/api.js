import axios from 'axios';

const api = axios.create({ baseURL: 'https://deploy-nodejs.saulofilho.com/' });

export default api;
