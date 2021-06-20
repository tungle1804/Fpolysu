import axios from 'axios';
const Menu_API_BASE_URL = "http://localhost:8080/api/v1/menu";
const MenuByEmail_API_BASE_URL = "http://localhost:8080/api/v1/getMenuByEmail";
const MenuByStatus_API_BASE_URL = "http://localhost:8080/api/v1/getMenuByStatus"
class Menu {
    getMenu() {
        return axios.get(Menu_API_BASE_URL);
    }
    getMenuByID(id) {
        return axios.get(Menu_API_BASE_URL + '/' + id);
    }
    createMenu(menus) {
        return axios.post(Menu_API_BASE_URL, menus)
    }
    deleteMenu(menus) {
        return axios.delete(Menu_API_BASE_URL + '/' + menus)
    }
    getMenuByEmail(email) {
        return axios.get(MenuByEmail_API_BASE_URL + '/' + email)
    }
    updateMenu(menu, idmenu) {
        return axios.put(Menu_API_BASE_URL + '/' + idmenu, menu)
    }
    getMenuByStatus(email) {
        return axios.get(MenuByStatus_API_BASE_URL + '/' + email)
    }
}
export default new Menu()