import { publicAPI } from './api';

// 认证
const auth = {
    login: publicAPI.POST('/base/login'),
    captcha: publicAPI.POST('/base/captcha'),
  }

export default auth;