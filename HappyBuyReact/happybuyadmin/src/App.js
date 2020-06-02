import React from 'react';
import './App.css';
import {  Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LogIn from './Components/LogIn'
import Home from './Components/Home';
import 'antd/dist/antd.css';
import Image from './Components/Image';

function App() {

 const ProtectedRoute =({component:Component, ...rest}) =>{
    return <Route {...rest} render = {(props)=>{
      return sessionStorage.getItem("token") ? <Component {...props}/> : <Redirect to={'/login'} />
    }}    
    />
  }
 
  return (
    <div className="App">
       <Router>
         <Switch>
          <ProtectedRoute  path="/home" component={Home} />
          <Route  path="/" component={LogIn} />
          <ProtectedRoute  path="/home" component={Home} />
          <Route  path="/login" component={LogIn} />
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
