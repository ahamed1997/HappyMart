import React, { Component } from "react";
import AuthService from './AuthService';
import Home from './Home';
import './LogIn.css';
import {toast } from 'react-toastify';
import { Tooltip } from '@material-ui/core';
import { Alert } from 'reactstrap';
import { Form, Input, Button, Checkbox } from 'antd';
import {LoginOutlined  } from '@ant-design/icons';
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
                this.setState({Message : res.data});
                console.log(this.state.Message)        
                sessionStorage.setItem("userInfo",res.data[5]);
                sessionStorage.setItem("userId",res.data[0]);
                sessionStorage.setItem("user",res.data[1])
                this.props.history.push('/home');                
               toast.warn('Welcome to HappyBuy ' + ' ' + res.data[1] ,{position:toast.POSITION.TOP_CENTER, autoClose:3000})
              
                
            }else if(res.data === ''){
                console.log("LogIn Failed")
                toast.error('Invalid Email or Password',{position:toast.POSITION.TOP_RIGHT, autoClose:3000})
                
            }
        });
        }else{
            toast.warn('Please Fill the Details..',{position:toast.POSITION.TOP_CENTER, autoClose:3000})
        }        
    };
    
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (<Router>
            <form>
            <div className="auth-wrapper">
                <div className="auth-inner">
                <img className="loginImage" src={ require('../images/gif1.gif')} />
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
                        <button type="submit" onClick={this.login} className="btn btn-primary btn-block">Login <LoginOutlined /></button>
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




// import { Form, Input, Button, Checkbox } from 'antd';
//  import React from "react";
//  import './LogIn.css';
// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };
// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

// const Login = () => {
//   const onFinish = values => {
//     console.log('Success:', values);
//   };

//   const onFinishFailed = errorInfo => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <div className="auth-wrapper">
//     <div className="auth-inner">
//         <h3>Sign In</h3>
     
//     <Form
//       {...layout}
//       name="basic"
//       initialValues={{ remember: true }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//     >
// <div className="form-group">
//       <Form.Item
//         label="Username"
//         name="username"
//         rules={[{ required: true, message: 'Please input your username!' }]}
//       >
//         <Input />
//       </Form.Item>
//       </div>
//       <div className="form-group">

//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[{ required: true, message: 'Please input your password!' }]}
//       >
//         <Input.Password />
//       </Form.Item>
//       </div>

//       <Form.Item {...tailLayout} name="remember" valuePropName="checked">
//         <Checkbox>Remember me</Checkbox>
//       </Form.Item>

//       <Form.Item {...tailLayout}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//       <p className="forgot-password text-right">
//             Forgot <a href="/forgotpassword">password?</a>
//          </p>
//     </Form>
//     </div></div>
//   );
// };

// export default Login;


// import React, { Component } from "react";
// import AuthService from './AuthService';
// import Home from './Home';
// import './LogIn.css';
// import {toast } from 'react-toastify';
// import { Tooltip } from '@material-ui/core';
// import { Alert } from 'reactstrap';
// import { Form, Input, Button, Checkbox } from 'antd';

// import 'react-toastify/dist/ReactToastify.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// export default class Login extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             CustomerEmail: '',
//             CustomerPassword: '',
//             Message:''         
//         }
//         this.login = this.login.bind(this);        
//     }
//     componentDidMount() {
//         localStorage.clear();
//     }

//     login = (e) => {
//         e.preventDefault();
//         if(this.state.CustomerEmail && this.state.CustomerPassword != '')
//         {
//             const credentials = {CustomerEmail: this.state.CustomerEmail, CustomerPassword: this.state.CustomerPassword};
//             AuthService.login(credentials).then(res => {
//             if(res.data !== '' ){      
//                 this.setState({Message : res.data});
//                 console.log(this.state.Message)        
//                 sessionStorage.setItem("userInfo",res.data[5]);
//                 sessionStorage.setItem("userId",res.data[0]);
//                 sessionStorage.setItem("user",res.data[1])
//                 this.props.history.push('/home');                
//                toast.warn('Welcome to HappyBuy ' + ' ' + res.data[1] ,{position:toast.POSITION.TOP_CENTER, autoClose:3000})
              
                
//             }else if(res.data === ''){
//                 console.log("LogIn Failed")
//                 toast.error('Invalid Email or Password',{position:toast.POSITION.TOP_RIGHT, autoClose:3000})
                
//             }
//         });
//         }else{
//             toast.warn('Please Fill the Details..',{position:toast.POSITION.TOP_CENTER, autoClose:3000})
//         }        
//     };
    
//     onChange = (e) =>
//         this.setState({ [e.target.name]: e.target.value });

//     render() {
//         return (<Router>
//             <form>
//             <div className="auth-wrapper">
//                 <div className="auth-inner">
//                 <img className="loginImage" src={ require('../images/gif1.gif')} />
//                 <h3>Sign In</h3>
//                         <div className="form-group">
//                             <label>Email address</label>
//                             <input type="email" className="form-control" name="CustomerEmail" value={this.state.CustomerEmail} onChange={this.onChange} placeholder="Enter email" />
//                         </div>
//                         <div className="form-group">
//                             <label>Password</label>
//                             <input type="password" className="form-control" name="CustomerPassword" value={this.state.CustomerPassword} onChange={this.onChange} placeholder="Enter password" />
//                         </div>
//                         <Tooltip title="Login" placement="bottom">
//                         <button type="submit" onClick={this.login} className="btn btn-primary btn-block">Login</button>
//                         </Tooltip>
//                         <p className="forgot-password text-right">
//                             Forgot <a href="/forgotpassword">password?</a>
//                         </p>
//                     </div>
//                 </div>                
//             </form>
//             </Router>     
//         );
//     }
// }