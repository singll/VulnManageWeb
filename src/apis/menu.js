import { authAPI,publicAPI } from "./api";



const menu = {
    get: authAPI.POST('/menu/getMenuList'),
}

export default menu;