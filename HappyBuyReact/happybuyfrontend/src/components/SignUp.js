
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';  
import 'reactjs-toastr/lib/toast.css';
import './SignUp.css';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class SignUp extends Component {
  constructor(props){  
                super(props)  
                this.state = {  
                    CustomerFirstName:'',  
                    CustomerLastName:'',  
                    CustomerMobile:'',  
                    CustomerEmail:'',
                    CustomerPassword:''
                    }  
            }  
    
registerCustomer=(event)=>{ 
  const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
  if(this.state.CustomerEmail && this.state.CustomerFirstName && this.state.CustomerLastName && this.state.CustomerMobile && this.state.CustomerPassword  != '') {
    axios.post('https://localhost:44376/api/RegisterCustomer/', this.state, {
      headers:headers
    }
  )  
  .then(json => {  
    
    console.log("json.data",json.data);
    console.log("json",json.status)
    console.log(json)
    
    if( json.data != 2627){  
      console.log("Customer Id :  ",json.data);  
      
      toast.success('Registration done Successfully',{position:toast.POSITION.TOP_RIGHT, autoClose:2000})
      this.props.history.push('/login')  
    }
    else{  

      toast.error('Email Exits Already',{position:toast.POSITION.TOP_RIGHT, autoClose:2000})
    } 
  }) 
  }else{
    event.preventDefault()
    toast.warn('Please Fill the Details..',{position:toast.POSITION.TOP_CENTER, autoClose:2000})
  }
 
   
}  
    handleChange= (e)=> {  
            this.setState({[e.target.name]:e.target.value});  
            }  
    render() {
        return (
          
            <form>
              <div className="auth-wrapper">
                <div className="auth-inner">
                <h3>Sign Up</h3>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" name="CustomerFirstName" onChange={this.handleChange} maxLength="15" value={this.state.CustomerFirstname} className="form-control" placeholder="First name" />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" name="CustomerLastName" onChange={this.handleChange} maxLength="15" value={this.state.CustomerLastName} className="form-control" placeholder="Last name" />
                    </div>
                    <div className="form-group">
                        <label>Mobile</label>
                        <input type="text" name="CustomerMobile" onChange={this.handleChange} maxLength="10" value={this.state.CustomerMobile} className="form-control" placeholder="Mobile" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" name="CustomerEmail" onChange={this.handleChange} value={this.state.CustomerEmail} className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="CustomerPassword" onChange={this.handleChange} maxLength="10" value={this.state.CustomerPassword} onChange={this.handleChange} value={this.state.CustomerFirstname} className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="button" onClick={this.registerCustomer} className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <Link  to={"/sign-in"}>sign in?</Link>
                    </p>
                  </div>
              </div>
                
            </form>
        );
    }
}