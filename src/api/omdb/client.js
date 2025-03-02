import axios from 'axios';
import { OMDB_CONFIG } from './config';

export const omdbClient = axios.create({
  baseURL: OMDB_CONFIG.BASE_URL,
});
