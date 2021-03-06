import React, { Component } from "react";
import AuthService from './AuthService';
import './LogIn.css';
import {  notification } from 'antd';
import { Tooltip } from 'antd';
import {LoginOutlined  } from '@ant-design/icons';
import { BrowserRouter as Router} from "react-router-dom";
export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            AdminEmail: '',
            AdminPassword: '',
            Message:''         
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
            const credentials = {CustomerEmail: this.state.CustomerEmail, CustomerPassword: this.state.CustomerPassword};
            AuthService.login(credentials).then(res => {
            if(res.data !== '' ){      
                this.setState({Message : res.data});
                sessionStorage.setItem("userInfo",res.data[5]);
                sessionStorage.setItem("userId",res.data[0]);
                sessionStorage.setItem("user",res.data[1])
                this.props.history.push('/home');   
                notification['success']({
                    message: 'Welcome to HappyBuy',
                    description:
                      'Logged In Successfully',
                  });             
            }else if(res.data === ''){
                notification['error']({
                    message: 'Invalid Email or Password',
                    description:
                      'Please check the inputs!',
                  }); 
                
            }
        });
        }else{
            notification['warning']({
                message: 'Please fill the details',
                description:
                  '',
              }); 
            
        }        
    };
    
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (<Router>
            <form>
            <div className="auth-wrapper">
                <div className="auth-inner">
                <h3>Sign In</h3>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" name="CustomerEmail" value={this.state.CustomerEmail} onChange={this.onChange} placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" name="CustomerPassword" value={this.state.CustomerPassword} onChange={this.onChange} placeholder="Enter password" />
                        </div>
                        <Tooltip placement="bottom" title="LogIn">
                        <button type="submit" onClick={this.login} className="btn btn-primary btn-block">Login <LoginOutlined /></button>
                        </Tooltip>
                       
                    </div>
                </div>                
            </form>
            </Router>     
        );
    }
}