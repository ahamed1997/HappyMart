import axios from 'axios';

const BASE_URL = 'https://localhost:44376/api/';

class AuthService
{
    login(credentials){
        
        return axios.post(BASE_URL + 'adminLogIn', credentials);
    }

    getAuthHeader() {       

        return {headers: {'Content-Type': 'application/json','Accept': 'application/json', Authorization: 'Bearer ' + this.getUserInfo()}};
    }

    getUserInfo(){
        return sessionStorage.getItem("token");
    }

    getAllCustomers()
    {
        return axios.post(BASE_URL + 'getAllCustomers',{}, this.getAuthHeader());
    }

    getAllProducts()
    {
        return axios.post(BASE_URL + 'GetAllProducts', {}, this.getAuthHeader());
    }

    getSpecification(key)
    {
        return axios.post(BASE_URL + 'GetSpecification',key, this.getAuthHeader());
    }

    updateProductDetails(key)
    {
        return axios.post(BASE_URL + 'UpdateProductDetails',key, this.getAuthHeader());
    }

    addProduct(product)
    {
        console.log(product)
        return axios.post(BASE_URL + 'InsertProduct',product, this.getAuthHeader());
    }

    addSpecifications(object)
    {
        return axios.post(BASE_URL + 'addSpecification',object, this.getAuthHeader());
    }

    getSubCategories()
    {
        return axios.post(BASE_URL + 'GetSubCategories',{}, this.getAuthHeader());
    }

    getAllProducts()
    {
        return axios.post(BASE_URL + 'GetAllProducts',{}, this.getAuthHeader());
    }
}
export default new AuthService();