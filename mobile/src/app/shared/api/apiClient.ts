import axios from 'axios';

// Em Android físico, trocar localhost por IP da máquina.
export const apiClient = axios.create({
  baseURL: 'http://192.168.15.30:3000/api/v1',
  timeout: 5000,
});
