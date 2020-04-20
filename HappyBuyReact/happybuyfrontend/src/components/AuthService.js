import axios from 'axios';

const USER_API_BASE_URL = 'https://localhost:44376/api/';

class AuthService {

    login(credentials){
        
        return axios.post(USER_API_BASE_URL + 'LogIn', credentials);
    }

    getUserInfo(){
        return JSON.parse(sessionStorage.getItem("userInfo"));
    }

    getAuthHeader() {
       return {headers: {Authorization: 'Bearer ' + this.getUserInfo().token }};
    }

    logOut() {
        localStorage.removeItem("userInfo");
        return axios.post(USER_API_BASE_URL + 'logout', {}, this.getAuthHeader());
    }
}

export default new AuthService();