import axios from 'axios';

const USER_API_BASE_URL = 'https://localhost:44376/api/';

const PAY_PAL_CRENDENTIALS = 'https://www.paypal.com/sdk/js?client-id=ARNcFazYFHPAjKADrd_Zk_BOy5BrMPclb0gB9LVKzBLlr7WnOAiOBIVzb_vjbEPwixdmlLUFa-I0BDrb';

class AuthService {

    login(credentials){
        
        return axios.post(USER_API_BASE_URL + 'LogIn', credentials);
    }

    getAllProducts()
    {
        return axios.post(USER_API_BASE_URL + 'GetAllProducts', {}, this.getAuthHeader());
    }

    getOrders(key)
    {
        return axios.post(USER_API_BASE_URL + 'GetOrderDetails',key, this.getAuthHeader());
    }

    placeOrder(key)
    {
        console.log(key)
        return axios.post(USER_API_BASE_URL + 'PlaceOrder',key, this.getAuthHeader());
    }

    payPalId()
    {
        return PAY_PAL_CRENDENTIALS;
    }

    getProducts(key)
    {
        return axios.post(USER_API_BASE_URL + 'GetProducts',key, this.getAuthHeader());
    }

    getSpecification(key)
    {
        return axios.post(USER_API_BASE_URL + 'GetSpecification',key, this.getAuthHeader());
    }

    getMyProfile(key)
    {
        return axios.post(USER_API_BASE_URL + 'GetMyProfile',key, this.getAuthHeader());
    }

    updateProfile(key)
    {
        return axios.post(USER_API_BASE_URL + 'updateProfile',key, this.getAuthHeader());
    }

    profileValidation(key)
    {
        return axios.post(USER_API_BASE_URL + 'UpdateProfileValidation',key, this.getAuthHeader());
    }

    addToCart(key)
    {
        return axios.post(USER_API_BASE_URL + 'AddToCart',key, this.getAuthHeader());
    }

    updateCart(key)
    {
        return axios.post(USER_API_BASE_URL + 'UpdateCartQuantity',key, this.getAuthHeader());
    }

    removefromCart(key)
    {
        return axios.post(USER_API_BASE_URL + 'RemoveCartItem',key, this.getAuthHeader());
    }

    getUserInfo(){
        return sessionStorage.getItem("userInfo");
    }

    getCartItems(key)
    {
        return axios.post(USER_API_BASE_URL + 'GetCartItems',key, this.getAuthHeader());
    }

    registerCustomer(credentials)
    {
        return axios.post(USER_API_BASE_URL + 'RegisterCustomer', credentials);
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