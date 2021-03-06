import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';  
import 'reactjs-toastr/lib/toast.css';
import './SignUp.css' ;
import {  notification } from 'antd';
import {message} from 'antd';
import { Button } from 'antd';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {LoginOutlined ,LeftCircleFilled,WarningFilled,CheckCircleOutlined } from '@ant-design/icons';
const emailRegex = RegExp(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/);
const key = 'updatable';

export default class ForgotPassword extends Component {
    constructor(props){  
        super(props)  
        this.state = {  
            CustomerEmail:null,
            CustomerPassword:null,
            disabled:false,
            userOtp:null,
            Otp:null,
            isOtpValid:true,
            error:false,
            isEmailValid:false,
            formErrors:{
              CustomerEmail:"",
            },
            loadings:false,
            }  
    } 
    handSubmit = e =>{
        e.preventDefault()
        if(this.state.CustomerPassword && this.state.userOtp != null)
        {
            const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
            const forgotPassword = {CustomerEmail:this.state.CustomerEmail,CustomerPassword:this.state.CustomerPassword}
            axios.post('https://localhost:44376/api/updatePassword/', forgotPassword, {
              headers:headers
            })  
          .then(json => {console.log(json.data)
            if( json.data === 1){  
                notification['success']({
                  message: 'Password updated Successfully!',
                });  
                this.props.history.push('/login');              
            }
            else{  
              notification['warning']({
                message: 'Password update failed',
              }); 
            } 
          }) 
        }else
        {
            e.preventDefault()
            notification['warning']({
              message: 'Please fill the Details..',
            }); 
        }
    }
   

    enterLoading = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false });
        }, 8000);
      };

    handleSubmit = e =>{
        e.preventDefault()
        if(this.state.CustomerEmail !== null && this.state.formErrors.CustomerEmail === "")
        {              
          message.loading({ content: 'Loading...', key });      
          setTimeout(() => {
            message.loading({ content: 'Loading...', key });
          }, 1000);    
          const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
          const forgotPassword = {CustomerEmail:this.state.CustomerEmail}
            axios.post('https://localhost:44376/api/forgotPassword/', forgotPassword, {
              headers:headers
            })  
          .then(json => {console.log(json.data)
            if( json.data !== ''){  
              this.setState({isEmailValid:true}) 
              this.setState({Otp:json.data})
            }
            else{  
              message.loading({ content: 'Loading...', key });
              setTimeout(() => {
                message.error({ content: 'Email does not exist..', key, duration: 2 });
              }, 1000);
            } 
          }) 
        }
        else{
       
          e.preventDefault()
          message.loading({ content: 'Loading...', key });
          setTimeout(() => {
            message.warn({ content: 'Please Fill the Details..', key, duration: 2 });
          }, 1000);
        }
      }
      handChange = (e)=>{
        e.preventDefault() 
        this.setState({[e.target.name]:e.target.value});  
      }
      validateOtp = (e)=>
      {
          e.preventDefault()
         if(this.state.userOtp === this.state.Otp)
         {
             this.setState({isOtpValid:false})
             this.setState({error:false})
             this.setState({disabled:true})
             message.loading({ content: 'Loading...', key });
              setTimeout(() => {
                message.success({ content: 'OTP macthed', key, duration: 2 });
              }, 1000);

         }else{
             this.setState({error:true})
         }
      }

      handleChange= (e)=> {  
        e.preventDefault() 
        this.setState({[e.target.name]:e.target.value});  
       let formErrors = this.state.formErrors;
  
       switch(e.target.name){
        case "CustomerEmail":
          formErrors.CustomerEmail = 
         emailRegex.test(e.target.value) 
          ? ""
          :"*Invalid Email ";
          break;
        default:
          break;
       }
       this.setState({formErrors, [e.target.name]:e.target.value})
      }  
    render() {
        const { formErrors} = this.state;
        return (
            <div>
                {this.state.isEmailValid ?
                (<div>
                    <div>
                        <div className="auth-wrapper">
                            <div className="auth-inner">
                                <form onSubmit={this.handSubmit} noValidate>
                                    <h3>Change Password</h3>
                                    <br/>
                                        <div className="form-group">
                                             <label>Enter the OTP sent to your mail</label>
                                            <input type="text" name="userOtp" className='form-control' value={this.state.userOtp} onChange={this.handChange} onPointerEnter={()=>{this.setState({error:false})}} onPointerLeave={this.validateOtp} maxLength="8" placeholder=' Enter Otp' disabled={this.state.disabled} />
                                            {this.state.error &&(<span className="errorMessage"> <WarningFilled />&nbsp;&nbsp;&nbsp;Invalid Otp</span>)}
                                        </div>
                                        <div className="form-group">
                                             <label>Password</label>
                                            <input type="password" name="CustomerPassword"  onChange={this.handChange} maxLength="15" value={this.state.CustomerPassword} className="form-control"  disabled={this.state.isOtpValid}  placeholder="Enter new Password" />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                )
                :(
                    <div>
                        <div className="auth-wrapper">
                            <div className="auth-inner">
                                <form onSubmit={this.handleSubmit} noValidate>
                                    <h3>Forgot Password</h3>
                                        <div className="form-group">
                                             <label>Email address</label>
                                            <input type="email" name="CustomerEmail" noValidate onChange={this.handleChange} maxLength="30" value={this.state.CustomerEmail} className="form-control" placeholder="Enter email" />
                                            {formErrors.CustomerEmail.length>0 &&(
                                              <span className="errorMessage">{formErrors.CustomerEmail}</span>
                                             )}
                                        </div>
                                        <Link to={{pathname:"/login"}} className="btn btn-secondary btn-block"><LeftCircleFilled />&nbsp;&nbsp; &nbsp;Back</Link>  
                                          <button loading={this.state.loadings} type="submit" className="btn btn-primary btn-block">{this.state.loadings}Submit&nbsp;&nbsp;&nbsp; <LoginOutlined/> </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        )
    }
}
