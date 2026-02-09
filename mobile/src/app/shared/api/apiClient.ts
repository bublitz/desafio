import axios from 'axios';
import { API_BASE_URL } from '@env';

// Em Android físico, trocar localhost por IP da máquina.
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});
