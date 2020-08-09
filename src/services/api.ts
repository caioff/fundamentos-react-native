import axios from 'axios';

// yarn json-server server.json -p 3333 -h 192.168.0.10

const api = axios.create({
  baseURL: 'http://192.168.0.10:3333',
});

export default api;
