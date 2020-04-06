import React, { Component } from 'react';
import logo from './logo.svg';
import './WelcomePage.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionEventHandler from './components/FunctionEventHandler';
import ClassEventHandler from './components/ClassEventHandler';
import EventBinding from './components/EventBinding';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import SearchProduct from './components/SearchProduct'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  Redirect } from "react-router-dom";

import { MDBCol, MDBFormInline, MDBBtn,MDBMask, MDBView, MDBContainer, MDBRow } from "mdbreact";
import {PageRoute} from './components/PageRoute';
import Login from './components/LogIn';
function WelcomePage() {
  const ProtectedRoute =({component:Component, ...rest}) =>{
    return <Route {...rest} render = {(props)=>{
      return sessionStorage.getItem("userInfo") ? <Component {...props}/> : <Redirect to={'/login'} />
    }}
    
    />
  }
  const isLoggedIn = sessionStorage.getItem("userInfo");
  
  
  function logOut() {
    sessionStorage.removeItem("userInfo");   
    
  }
 
  return (<Router>
    <div className="App">    
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/home"}><h3 ><img className="logo" src={ require('./images/logo1.jpg') } /><i>Happy Buy</i></h3></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          {isLoggedIn
                ? <ul className="navbar-nav ml-auto">
                <MDBCol md="15">
                  <MDBFormInline className="md-form mr-auto mb-4">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    <MDBBtn gradient="aqua"  type="submit" >
                      Search
                    </MDBBtn>        
                  </MDBFormInline>
                </MDBCol>              
                <li className="nav-item">              
                  <Link className="nav-link" onClick={logOut} to={"/login"}>Logout</Link>
                </li>
              </ul>                
              : <ul className="navbar-nav ml-auto">
                <MDBCol md="15">
                  <MDBFormInline className="md-form mr-auto mb-4">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    <MDBBtn gradient="aqua"   to={"/searchProduct"} type="button" >
                      Search
                    </MDBBtn>        
                  </MDBFormInline>
                </MDBCol>              
                <li className="nav-item">              
                  <Link className="nav-link"  to={"/login"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to={"/sign-up"}>Sign up</Link>
                </li>
              </ul>
            }
            
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
        <Switch>
        {/* <Route path="/" exact component={LogIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/login" component={LogIn} />     
        {isLoggedIn ? (
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/landProduct" component={LandProduct} />
            </Switch>
          
        ) : (
          <Route exact path="/login" component={LogIn} />
        )}
                */}
        <Route path="/" exact component={LogIn} />
        <Route  path="/login" component={LogIn} />
        <Route  path="/sign-up" component={SignUp} />
        <ProtectedRoute exact path="/home" component={Home} />
        <ProtectedRoute exact path="/searchProduct" component={SearchProduct} />
      </Switch>         
        </div>
      </div>
    </div></Router>
  );
}

export default WelcomePage;
