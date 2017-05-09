import axios from 'axios';

const jwt = window.localStorage.getItem('auth_token');
axios.defaults.headers.common.Authorization = `Bearer ${jwt}`;
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
