import React, { Component } from "react";
import AuthService from './AuthService';
import './LogIn.css';
import { Button } from 'antd';
import {  notification } from 'antd';
import { Tooltip } from '@material-ui/core';
import {LoginOutlined  } from '@ant-design/icons';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router} from "react-router-dom";

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            CustomerEmail: '',
            CustomerPassword: '',
            Message:'' ,
            loadings:false,
        }
        this.login = this.login.bind(this);        
    }
    componentDidMount() {
        localStorage.clear();
    }
  
    login = (e) => {
        e.preventDefault();
       
        if(this.state.CustomerEmail && this.state.CustomerPassword !== '')
        {
            this.setState({
                loadings: true,
              });
              setTimeout(() => {
                this.setState({ loadings: false });
              }, 9000);
            const credentials = {CustomerEmail: this.state.CustomerEmail, CustomerPassword: this.state.CustomerPassword};
            AuthService.login(credentials).then(res => {
            if(res.data !== '' ){      
                this.setState({Message : res.data});
                sessionStorage.setItem("userInfo",res.data[5]);
                sessionStorage.setItem("userId",res.data[0]);
                this.props.history.push('/home');   
                notification['success']({
                    message: 'Welcome to HappyBuy',
                    description:
                      'Logged In Successfully',
                  });             
            }else if(res.data === '')
            {this.setState({
                loadings: false,
              });
                notification['error']({
                    message: 'Invalid Email or Password',
                    description:
                      'Please check the inputs!',
                  }); 
                
            }
        });
        }else{
            this.setState({
                loadings: true,
              });
              setTimeout(() => {
                this.setState({ loadings: false });
              }, 1000);

              setTimeout(() => {
                notification['warning']({
                    message: 'Please fill the details',
                    description:
                      '',
                  });  
                }, 1000);           
            
        }        
    };
    
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        const { loadings } = this.state;
        return (<Router>
            <form>
            <div className="auth-wrapper">
                <div className="auth-inner">
                <img className="loginImage" alt="" src={ require('../images/gif1.gif')} />
                <h3>Sign In</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" name="CustomerEmail" value={this.state.CustomerEmail} onChange={this.onChange} placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="CustomerPassword" value={this.state.CustomerPassword} onChange={this.onChange} placeholder="Enter password" />
                    </div>
                        <Tooltip title="Login" placement="bottom">
                        <Button type="primary"  style={{"float":"center"}} onClick={this.login} loading={this.state.loadings} block><LoginOutlined/>LogIn</Button>
                        </Tooltip>
                        <p className="forgot-password text-right">
                            Forgot <a href="/forgotpassword">password?</a>
                        </p>
                    </div>
                </div>                
            </form>
        </Router>     
        );
    }
}