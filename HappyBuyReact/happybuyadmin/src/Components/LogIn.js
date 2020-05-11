import React, { Component } from "react";
import AuthService from './AuthService';
import '../CSS/LogIn.css';
import { Button } from 'antd';
import {  notification } from 'antd';
import {LoginOutlined  } from '@ant-design/icons';
import { BrowserRouter as Router} from "react-router-dom";
import 'antd/dist/antd.css';

export default class LogIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            AdminEmail: '',
            AdminPassword: '',
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
       
        if(this.state.AdminEmail && this.state.AdminPassword !== '')
        {
            this.setState({
                loadings: true,
              });
              setTimeout(() => {
                this.setState({ loadings: false });
              }, 9000);
            const credentials = {AdminEmail: this.state.AdminEmail, AdminPassword: this.state.AdminPassword};
            AuthService.login(credentials).then(res => {
                console.log(res.data);
            if(res.data !== '' ){      
                this.setState({Message : res.data});
                console.log(res.data);
                sessionStorage.setItem("token",res.data[5]);
                this.props.history.push('/home');   
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
        return (<Router>
            <form>
            <div className="auth-wrapper">
                <div className="auth-inner">
                <h3>Sign In</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" name="AdminEmail" value={this.state.AdminEmail} onChange={this.onChange} placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="AdminPassword" value={this.state.AdminPassword} onChange={this.onChange} placeholder="Enter password" />
                    </div>
                        <Button type="primary"   onClick={this.login} loading={this.state.loadings} block><LoginOutlined/>LogIn</Button>
                    </div>
                </div>                
            </form>
        </Router>     
        );
    }
}