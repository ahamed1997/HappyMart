import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';  
import 'reactjs-toastr/lib/toast.css';
import './SignUp.css' ;
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {EditOutlined,LockOutlined} from '@ant-design/icons';
import AuthService from './AuthService';
import {  notification } from 'antd';
import {message} from 'antd';
import { Button } from 'antd';
import {LeftCircleOutlined ,LogoutOutlined,CheckCircleOutlined } from '@ant-design/icons';

const formValid = ({formErrors, ...rest}) => {
  let valid = true;
  Object.values(formErrors).forEach(val=>
    {
      val.length > 0 && (valid = false)    
    });
    Object.values(rest).forEach(val =>{
      val === null && (valid = false)
    });

  return valid;
}
const key = 'updatable';

const emailRegex = RegExp(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/);
const mobileRegex = RegExp(/^\d{10}$/);
 class UpdateProfile extends Component {
  constructor(props){  
                super(props)  
                this.state = {                     
                    CustomerFirstName: null,  
                    CustomerLastName:null,  
                    CustomerMobile:null,  
                    CustomerEmail:null,
                    CustomerPassword:null,                 
                    formErrors:{
                      CustomerFirstName:"",
                      CustomerLastName:"",
                      CustomerMobile:"",
                      CustomerEmail:"",
                      CustomerPassword:""
                    },isValidProfile:false,
                    Password:null,
                    loadings:false,
                    }  
            }  
    
    componentDidMount()
    {
      const CustomerId = {CustomerId: sessionStorage.getItem('userId') }
      AuthService.getMyProfile(CustomerId)  
      .then(json=>{        console.log(json)

        this.setState({ CustomerFirstName:json.data[0].customerFirstName});
        this.setState({ CustomerLastName:json.data[0].customerLastName});
        this.setState({ CustomerMobile:json.data[0].customerMobile});
        this.setState({ CustomerEmail:json.data[0].customerEmail});
      }) 
    }
  handleSubmit = e =>{
    e.preventDefault()
    if(formValid(this.state))
    {  this.setState({
      loadings: true,
    });
    setTimeout(() => {
      this.setState({ loadings: false });
    }, 5000);
      const key = {CustomerId: sessionStorage.getItem('userId'),CustomerFirstName:this.state.CustomerFirstName,CustomerLastName:this.state.CustomerLastName,CustomerMobile:this.state.CustomerMobile,CustomerEmail:this.state.CustomerEmail,CustomerPassword:this.state.CustomerPassword}
      AuthService.updateProfile(key)
      .then(json=>{
        console.log(json)
        
        console.log(sessionStorage.getItem('userId'))
        if(json.status === 200){
          message.success({ content: 'Profile updated Successfuly..', key, duration: 2 });

          setTimeout(() => {
            this.props.history.push('/home');        

          }, 1000);
        }
      }) 
    }
    else{
      e.preventDefault()
      setTimeout(() => {
        this.setState({
          loadings: true,
        });
        setTimeout(() => {
          this.setState({ loadings: false });
        }, 1000);
        notification['warning']({
          message: 'Please fill the Details..',
        }); 
      }, 1000);
      }
  }

  handleValidation =(e)=>
  {
    if(this.state.Password !== null)
    {
      this.setState({
        loadings: true,
      });
      setTimeout(() => {
        this.setState({ loadings: false });
      }, 5000);
      const key = {CustomerId: sessionStorage.getItem('userId'),CustomerPassword:this.state.Password }
      AuthService.profileValidation(key)
      .then(json=>{
        if(json.data !== 0)
        {
          setTimeout(() => {
            this.setState({isValidProfile:true})
          }, 5000);
        }
        else{
          notification['error']({
            message: 'Invalid Password..',
          });        }
      }) 
    }
    else{
      this.setState({
        loadings: true,
      });
      setTimeout(() => {
        this.setState({ loadings: false });
      }, 1000);
      setTimeout(() => {
        notification['warning']({
          message: 'Please fill the Details..',
        }); 
      }, 1000); 
    }
  }
    handleChange= (e)=> {  
      e.preventDefault() 
      this.setState({[e.target.name]:e.target.value});  
     let formErrors = this.state.formErrors;

     switch(e.target.name){
       case "CustomerFirstName":
         formErrors.CustomerFirstName = 
         e.target.value.length < 3 
         ? "*Minimum 3 characters required"
         :"";
         break;
      case "CustomerLastName":
        formErrors.CustomerLastName = 
        e.target.value.length < 3
        ? "*Minimum 3 characters required"
        :"";
        break;
      case "CustomerMobile":
        formErrors.CustomerMobile = 
        mobileRegex.test(e.target.value) 
        ? ""
        :"*Invalid Mobile";
        break;
      case "CustomerEmail":
        formErrors.CustomerEmail = 
       emailRegex.test(e.target.value) 
        ? ""
        :"*Invalid Email ";
        break;
      case "CustomerPassword":
        formErrors.CustomerPassword = 
        e.target.value.length < 8 
        ? "*Minimum 8 characters required"
        :"";
        break;
      default:
        break;
     }
     this.setState({formErrors, [e.target.name]:e.target.value})
    }  
    render() {
      const { formErrors} = this.state;
        return (
              <div className="auth-wrapper">
                <div className="auth-inner">
                 {this.state.isValidProfile ? (
                    <form onSubmit={this.handleSubmit} noValidate>
                    <h3><EditOutlined />Edit Profile</h3>
                        <div className="form-group">
                            <label>First name</label>
                            <input  type="text" name="CustomerFirstName"  onChange={this.handleChange} value={this.state.CustomerFirstName} maxLength="15" className="form-control" placeholder="First name"/>
                            {formErrors.CustomerFirstName.length>0 &&(
                              <span className="errorMessage">{formErrors.CustomerFirstName}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" name="CustomerLastName" noValidate onChange={this.handleChange} maxLength="15" value={this.state.CustomerLastName} className="form-control" placeholder="Last name" />
                            {formErrors.CustomerLastName.length>0 &&(
                              <span className="errorMessage">{formErrors.CustomerLastName}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Mobile</label>
                            <input type="text" name="CustomerMobile"  noValidate onChange={this.handleChange} maxLength="10" value={this.state.CustomerMobile} className="form-control" placeholder="Mobile" />
                            {formErrors.CustomerMobile.length>0 &&(
                              <span className="errorMessage">{formErrors.CustomerMobile}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" name="CustomerEmail" noValidate onChange={this.handleChange} maxLength="30" value={this.state.CustomerEmail} className="form-control" placeholder="Enter email" />
                            {formErrors.CustomerEmail.length>0 &&(
                              <span className="errorMessage">{formErrors.CustomerEmail}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="CustomerPassword"  noValidate  maxLength="10" value={this.state.CustomerPassword} onChange={this.handleChange}  className="form-control" placeholder="Enter password" />
                            {formErrors.CustomerPassword.length>0 &&(
                              <span className="errorMessage">{formErrors.CustomerPassword}</span>
                            )}
                        </div>
                        <button type="submit" className="btn btn-primary btn-block"><CheckCircleOutlined />&nbsp;&nbsp;Update</button>
                        </form>
                     ):(
                  <div >
                     <h3><LockOutlined /></h3>
                     <div className="text-center">
                          <h6 >Please verify that its you!</h6>
                          <label>Password</label>
                          <input type="password" name="Password"  name="Password"   onChange={this.handleChange} maxLength="10"  value={this.state.Password} className="form-control" placeholder="Enter your password" />
                          <br/>
                          <Button type="primary" danger href="/home"><LeftCircleOutlined />Back</Button>&nbsp;&nbsp;
                          <Button loading={this.state.loadings} onClick={this.handleValidation} type="primary"><CheckCircleOutlined />Verify</Button>
                     </div>
                  </div>
                 )} 
                  </div>
              </div>
                
            
        );
    }
}
export default UpdateProfile