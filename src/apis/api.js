import API from '../utils/ajax';
import { token } from '@/store.js';

// 服务器
const requestURL = 'http://127.0.0.1:8888/';



let headers = {}

let token_val = '';
token.subscribe(value=>{
  if (value != 'null') {
    token_val = value;
  }
})
if (token_val != '') 
{
  // headers.Authorization="Bearer "+token;
  headers['x-token'] = token_val;
}

// 无需认证的API
const publicAPI = new API({ baseURL: requestURL});

const authAPI = new API({ baseURL: requestURL, headers});



export {requestURL, publicAPI, authAPI};