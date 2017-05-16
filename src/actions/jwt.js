import axios from 'axios';
import './common';

axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('auth_token');

  if (token != null) {
    config.headers.Authorization = `Bearer ${token}`; // eslint-disable-line
  }

  return config;
}, err => (Promise.reject(err)));
