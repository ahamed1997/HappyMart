import axios from 'axios';
import {notification} from 'antd';

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

    geyAllOrders(key)
    {
        return axios.post(BASE_URL + 'GetSpecification',key, this.getAuthHeader());
    }

    updateProductDetails(key)
    {
        return axios.post(BASE_URL + 'UpdateProductDetails',key, this.getAuthHeader());
    }

    updateSpecifications(key)
    {
        return axios.post(BASE_URL + 'updateSpecification',key, this.getAuthHeader());
    }

    deleteSpecification(key)
    {
        return axios.post(BASE_URL + 'deletespecification',key, this.getAuthHeader());
    }

    addProduct(product)
    {
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

    getAllOrders()
    {
        return axios.post(BASE_URL + 'getallorders',{}, this.getAuthHeader());
    }

    getOrdersDetails(key)
    {
        return axios.post(BASE_URL + 'getallorderdetails',key, this.getAuthHeader());
    }

    getAllVendors()
    {
        return axios.post(BASE_URL + 'getallvendors',{}, this.getAuthHeader());
    }

    getStock()
    {
        return axios.post(BASE_URL + 'getstock',{}, this.getAuthHeader());
    }

    getSales()
    {
        return axios.post(BASE_URL + 'getsales',{}, this.getAuthHeader());
    }

    getSalesByProducts()
    {
        return axios.post(BASE_URL + 'getsalesbyproduct',{}, this.getAuthHeader());
    }

    getOrderStatus()
    {
        return axios.post(BASE_URL + 'getOrderStatus',{}, this.getAuthHeader());
    }

    updateOrderStatus(key)
    {
        console.log(key)
        return axios.post(BASE_URL + 'updateOrderStatus',key, this.getAuthHeader());
    }

    getAllShippingAddress()
    {
        return axios.post(BASE_URL + 'getallshippingaddress',{}, this.getAuthHeader());
    }

    errorHandling(error)
    {
        if (!error.response) {
            notification['error']({
                message: 'Network Error',
                description:
                  '',
              }); 
        }else
        if(error.response.status === 401)
          {
              notification['error']({
                  message: 'UnAuthorized Access',
                  description:
                    '',
                }); 
          }else if(error.response.status === 500) 
          {
              notification['error']({
                  message: 'Something went wrong!',
                  description:
                    '',
                }); 
          }else{
            notification['error']({
                message: 'Something went wrong!',
                description:
                  '',
              }); 

          }
    }
}
export default new AuthService();