import API from '../utils/ajax';

// 服务器
export const requestURL = 'http://127.0.0.1:8080/api/';


// 无需认证的API
const currentAPI = new API({ baseURL: requestURL});


// 认证
const auth = {
    login: currentAPI.POST('/login/'),
    captcha: currentAPI.POST('/base/captcha'),
  }

export default auth;