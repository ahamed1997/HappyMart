import React from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {  Redirect } from "react-router-dom";
import LogIn from './Components/LogIn';

function App() {
//  const ProtectedRoute =({component:Component, ...rest}) =>{
//     return <Route {...rest} render = {(props)=>{
//       return sessionStorage.getItem("userInfo") ? <Component {...props}/> : <Redirect to={'/login'} />
//     }}    
//     />
//   }
  return (
    <Router>
      <Home/>
      <Switch>
        {/* <Route  path="/" component={LogIn} />   
        <ProtectedRoute exact path="/home" component={Home} /> */}
      </Switch>
  </Router>
  );
}

export default App;
