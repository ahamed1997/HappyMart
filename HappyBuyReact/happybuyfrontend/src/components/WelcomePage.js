import React, { Component } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {  Redirect } from "react-router-dom";
import LogIn from './LogIn';
import SignUp from './SignUp';
import Home from './Home';
import SearchProduct from './SearchProduct'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './WelcomePage.css';
import Cart from './Cart';
import EmptyCart from './EmptyCart';
import Profile from './Profile';
import EmptySearch from './EmptySearch';
import PlaceOrder from './PlaceOrder';
import Orders from './Orders';
import PlaceOrderCart from './PlaceOrderCart';
import ViewProduct from './ViewProduct';
import PaymentResult from './PaymentResult';
import NavbarComponent from './NavbarComponent';
import NavbarIn from './NavbarIn';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import MainPage from './MainPage';
import about from './about';
import AdminHome from './AdminHome';

export const Context = React.createContext();
class WelcomePage extends Component {
  constructor(props){  
    super(props)  
    this.state = { 
    }  
}    
  ProtectedRoute =({component:Component, ...rest}) =>{
    return <Route {...rest} render = {(props)=>{
      return sessionStorage.getItem("userInfo") ? <Component {...props}/> : <Redirect to={'/login'} />
    }}    
    />
  }
 
  render() {
    return (
    <Router>
    <div className="App" >    
    {(sessionStorage.getItem("userInfo"))?
    ( <div style={{ position: 'fixed', zIndex: 1, width: '100%', top:0 }}>
        <NavbarIn/> 
      </div>  
    ):(
      <NavbarComponent/>
    )}
      <div>
        <div className="childComponent">
          <Switch>
          <Route path="/" exact component={MainPage} />
          <Route  path="/happybuy" component={MainPage} />   
          <Route  path="/login" component={LogIn} />
          <Route  path="/sign-up" component={SignUp} />
          <Route  path="/home" component={Home} />
          <Route  path="/about" component={about} />   
          <this.ProtectedRoute exact path="/cart" component={Cart} />
          <this.ProtectedRoute exact path="/emptyCart" component={EmptyCart} />
          <this.ProtectedRoute exact path="/profile" component={Profile} />
          <this.ProtectedRoute exact path="/placeOrder" component={PlaceOrder} /> 
          <this.ProtectedRoute exact path="/placeOrders" component={PlaceOrderCart} /> 
          <this.ProtectedRoute exact path="/paymentresults" component={PaymentResult} /> 
          <this.ProtectedRoute exact path="/order" component={Orders} /> 
          <this.ProtectedRoute exact path="/editProfile" component={UpdateProfile} /> 
          <Route exact path="/emptySearch" component={EmptySearch} />
          <Route exact path="/view" component={ViewProduct} /> 
          <Route  path="/searchProduct/:searchItem" component={SearchProduct} /> 
          <Route  path="/forgotpassword" component={ForgotPassword} /> 
          <Route  path="/admin" component={AdminHome} />   
          </Switch>         

        </div>
      </div>
    
    </div>
    
    </Router>
   )
  }
}

export default WelcomePage
