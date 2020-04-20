
// import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import axios from 'axios';  
// import 'reactjs-toastr/lib/toast.css';
// import './SignUp.css' ;
// import {toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default class SignUp extends Component {
//   constructor(props){  
//                 super(props)  
//                 this.state = {  
//                     CustomerFirstName:'',  
//                     CustomerLastName:'',  
//                     CustomerMobile:'',  
//                     CustomerEmail:'',
//                     CustomerPassword:''
//                     }  
//             }  
    
// registerCustomer=(event)=>{ 
//   const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
//   if(this.state.CustomerEmail && this.state.CustomerFirstName && this.state.CustomerLastName && this.state.CustomerMobile && this.state.CustomerPassword  != '') {
//     axios.post('https://localhost:44376/api/RegisterCustomer/', this.state, {
//       headers:headers
//     }
//   )  
//   .then(json => {
//     if( json.data != 2627){  
//       console.log("Customer Id :  ",json.data);  
      
//       toast.success('Registration done Successfully',{position:toast.POSITION.TOP_RIGHT, autoClose:2000})
//       this.props.history.push('/login')  
      
//     }
//     else{  

//       toast.error('Email Exits Already',{position:toast.POSITION.TOP_RIGHT, autoClose:2000})
//     } 
//   }) 
//   }else{
//     event.preventDefault()
//     toast.warn('Please Fill the Details..',{position:toast.POSITION.TOP_CENTER, autoClose:2000})
//   }
 
   
// }  
//     handleChange= (e)=> {  
//             this.setState({[e.target.name]:e.target.value});  
//             }  
//     render() {
//         return (
          
//             <form>
//               <div className="auth-wrapper">
//                 <div className="auth-inner">
//                 <h3>Sign Up</h3>
//                     <div className="form-group">
//                         <label>First name</label>
//                         <input type="text" name="CustomerFirstName" onChange={this.handleChange} maxLength="15" value={this.state.CustomerFirstname} className="form-control" placeholder="First name" />
//                     </div>

//                     <div className="form-group">
//                         <label>Last name</label>
//                         <input type="text" name="CustomerLastName" onChange={this.handleChange} maxLength="15" value={this.state.CustomerLastName} className="form-control" placeholder="Last name" />
//                     </div>
//                     <div className="form-group">
//                         <label>Mobile</label>
//                         <input type="text" name="CustomerMobile" onChange={this.handleChange} maxLength="10" value={this.state.CustomerMobile} className="form-control" placeholder="Mobile" />
//                     </div>
//                     <div className="form-group">
//                         <label>Email address</label>
//                         <input type="email" name="CustomerEmail" onChange={this.handleChange} value={this.state.CustomerEmail} className="form-control" placeholder="Enter email" />
//                     </div>

//                     <div className="form-group">
//                         <label>Password</label>
//                         <input type="password" name="CustomerPassword" onChange={this.handleChange} maxLength="10" value={this.state.CustomerPassword} onChange={this.handleChange} value={this.state.CustomerFirstname} className="form-control" placeholder="Enter password" />
//                     </div>
                  
//                     <button type="button" onClick={this.registerCustomer} className="btn btn-primary btn-block">Sign Up</button>
//                     <p className="forgot-password text-right">
//                         Already registered <Link  to={"/sign-in"}>sign in?</Link>
//                     </p>
//                   </div>
//               </div>
                
//             </form>
//         );
//     }
// }


import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';  
import 'reactjs-toastr/lib/toast.css';
import './SignUp.css' ;
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const emailRegex = RegExp(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/);
const mobileRegex = RegExp(/^\d{10}$/);
 class SignUp extends Component {
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
                    }
                    }  
            }  
    
  handleSubmit = e =>{
    e.preventDefault()
    if(formValid(this.state))
    {  
      const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
        axios.post('https://localhost:44376/api/RegisterCustomer/', this.state, {
          headers:headers
        })  
      .then(json => {
        if( json.data != 2627){  
          toast.success('Registration done Successfully',{position:toast.POSITION.TOP_RIGHT, autoClose:2000})
          this.props.history.push('/login')  
        }
        else{  
    
          toast.error('Email Exits Already',{position:toast.POSITION.TOP_RIGHT, autoClose:2000})
        } 
      }) 
    }
    else{
      e.preventDefault()
      toast.warn('Please Fill the Details..',{position:toast.POSITION.TOP_CENTER, autoClose:2000})
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
                <form onSubmit={this.handleSubmit} noValidate>
                <h3>Sign Up</h3>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" name="CustomerFirstName" noValidate onChange={this.handleChange} maxLength="15" value={this.state.CustomerFirstname} className="form-control" placeholder="First name" />
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
                        <input type="password" name="CustomerPassword"  noValidate onChange={this.handleChange} maxLength="10" value={this.state.CustomerPassword} onChange={this.handleChange} value={this.state.CustomerFirstname} className="form-control" placeholder="Enter password" />
                        {formErrors.CustomerPassword.length>0 &&(
                          <span className="errorMessage">{formErrors.CustomerPassword}</span>
                        )}
                    </div>
                  
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <Link  to={"/sign-in"}>sign in?</Link>
                    </p>
                    </form>
                  </div>
              </div>
                
            
        );
    }
}
export default SignUp