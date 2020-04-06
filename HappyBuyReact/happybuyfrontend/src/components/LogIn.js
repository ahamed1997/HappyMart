
import React, { Component } from "react";
import AuthService from './AuthService';
import Home from './Home';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            CustomerEmail: '',
            CustomerPassword: '',
            Message:''         
        }
        this.login = this.login.bind(this);        
    }
    componentDidMount() {
        localStorage.clear();
    }

    login = (e) => {
        e.preventDefault();
        if(this.state.CustomerEmail && this.state.CustomerPassword != '')
        {
            const credentials = {CustomerEmail: this.state.CustomerEmail, CustomerPassword: this.state.CustomerPassword};
            AuthService.login(credentials).then(res => {
            if(res.data !== '' ){                
                sessionStorage.setItem("userInfo",res);                
                this.props.history.push('/home');                
                toast.info('Welcome to HappyBuy',{position:toast.POSITION.TOP_CENTER, autoClose:false})
                
            }else if(res.data === ''){
                console.log("LogIn Failed")
                toast.error('Invalid Email or Password',{position:toast.POSITION.TOP_RIGHT, autoClose:2000})
                
            }
        });
        }else{
            toast.warn('Please Fill the Details..',{position:toast.POSITION.TOP_CENTER, autoClose:2000})
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
                        <button type="submit" onClick={this.login} className="btn btn-primary btn-block">Submit</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </div>                
            </form>
            </Router>     
        );
    }
}
