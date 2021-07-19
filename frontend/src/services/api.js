import axios from 'axios';
const { BACKEND_URL } = process.env;

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const Api = axios.create({
  baseURL: BACKEND_URL,
  timeout: 0,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Allow-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Origin': FRONTEND_URL,
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'x-requested-with',
    // 'Authorization': 'Basic Y29yZWxhYjpjb3JlbGFiMTIz',
  }
});
  

export default Api;