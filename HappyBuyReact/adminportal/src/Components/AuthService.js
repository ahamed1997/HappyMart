import axios from 'axios';

const USER_API_BASE_URL = 'https://localhost:44376/api/';

class AuthService {

    login(credentials){
        
        return axios.post(USER_API_BASE_URL + 'LogIn', credentials);
    }

    getAllProducts()
    {
        return axios.post(USER_API_BASE_URL + 'GetAllProducts', {}, this.getAuthHeader());
    }

    getProducts(key)
    {
        return axios.post(USER_API_BASE_URL + 'GetProducts',key, this.getAuthHeader());
    }

    getUserInfo(){
        return sessionStorage.getItem("userInfo");
    }

    getAuthHeader() {       

       return {headers: {'Content-Type': 'application/json','Accept': 'application/json', Authorization: 'Bearer ' + this.getUserInfo()}};
    }

    logOut() {
        localStorage.removeItem("userInfo");
        return axios.post(USER_API_BASE_URL + 'logout', {}, this.getAuthHeader());
    }
}

export default new AuthService();