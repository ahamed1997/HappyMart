import React, { Component } from 'react'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  Redirect } from "react-router-dom";
import LogIn from './LogIn';
import SignUp from './SignUp';
import Home from './Home';
import { Tooltip } from '@material-ui/core';
import {withRouter} from 'react-router-dom'
import SearchProduct from './SearchProduct'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MDBCol, MDBFormInline, MDBBtn,MDBMask, MDBView, MDBSideNav, MDBSideNavNav,
  MDBSideNavCat, MDBSideNavLink , MDBContainer, MDBRow , MDBIcon } from "mdbreact";
  import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem,Badge, Navbar } from 'reactstrap';
  import { DatePicker } from 'antd';
import './WelcomePage.css';
import Cart from './Cart';
import EmptyCart from './EmptyCart';
import Profile from './Profile';
import EmptySearch from './EmptySearch';
import PlaceOrder from './PlaceOrder';
import ChildrenComponent from '../PracticeComponents/ChildrenComponent';
import Orders from './Orders';
import PlaceOrderCart from './PlaceOrderCart';
import ViewProduct from './ViewProduct';
import PaymentResult from './PaymentResult';
import NavbarComponent from './NavbarComponent';
import NavbarIn from './NavbarIn';
import SideNavbar from './SideNavbar';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';


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
    const isSearchItem = this.state.searchItem;
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
          <Route path="/" exact component={LogIn} />
          <Route  path="/login" component={LogIn} />
          <Route  path="/sign-up" component={SignUp} />
          <Route  path="/home" component={Home} />
          <this.ProtectedRoute exact path="/cart" component={Cart} />
          <this.ProtectedRoute exact path="/emptyCart" component={EmptyCart} />
          <this.ProtectedRoute exact path="/emptySearch" component={EmptySearch} />
          <this.ProtectedRoute exact path="/profile" component={Profile} />
          <this.ProtectedRoute exact path="/placeOrder" component={PlaceOrder} /> 
          <this.ProtectedRoute exact path="/placeOrders" component={PlaceOrderCart} /> 
          <this.ProtectedRoute exact path="/paymentresults" component={PaymentResult} /> 
          <this.ProtectedRoute exact path="/order" component={Orders} /> 
          <this.ProtectedRoute exact path="/editProfile" component={UpdateProfile} /> 
          <Route exact path="/view" component={ViewProduct} /> 
          <Route  path="/searchProduct/:searchItem" component={SearchProduct} /> 
          <Route  path="/searchProduct/" component={Home} />   
          <Route  path="/forgotpassword" component={ForgotPassword} />   
          </Switch>         
        </div>
      </div>
    </div></Router>
   )
  }
}

export default WelcomePage

// <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//         <div className="container">
//           <Link className="navbar-brand" to={"/home"}><h3 ><img className="logo" src={ require('../images/logo1.jpg') } /><i>Happy Buy</i></h3></Link>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          
//           {sessionStorage.getItem("userInfo")
//                 ? <ul className="navbar-nav ml-auto">                  
//                 <MDBCol md="15">
//                   <MDBFormInline className="md-form mr-auto mb-4">               
                    
//                     <input className="form-control" name="searchItem" type="text"  value={this.state.searchItem} onChange={this.fixSearchItem} placeholder="Search product"/>                    
//                     <Link className="btn btn-outline-secondary"  to={"/searchProduct/"+this.state.searchItem}><b>Search</b></Link>   &nbsp;&nbsp;&nbsp;                 
//                     <Link className="navbar-brand" to={"/cart"}><img className="logo" src={ require('../images/gif2.gif') } /> </Link>
//                     <div  className="Dropdown">
//                     <Dropdown isOpen={this.state.dropdownOpen} onClick={this.toggle}>
//                         <DropdownToggle caret color="primary">
//                         <Badge color="primary">@</Badge> {sessionStorage.getItem('user')}
//                         </DropdownToggle>
//                           <DropdownMenu>
                            
//                           <DropdownItem tag="a" href="/profile" >Profile</DropdownItem>
//                           <DropdownItem tag="a" href="/cart" >Cart</DropdownItem>
//                           <DropdownItem tag="a" href="/order" >Orders</DropdownItem>
//                         </DropdownMenu>
//                       </Dropdown>
//                     </div>
//                     &nbsp;&nbsp;
//                     </MDBFormInline>
//                 </MDBCol> 
               
//                 <li className="nav-item"> 
//                 <Link className="navbar-brand"  onClick={this.logOut}><img className="logo" src={ require('../images/lgt.png') } /> Logout</Link>                       
             
//                 </li>
//               </ul>                
//               : 
              
//               <ul className="navbar-nav ml-auto">               
               
//                 <MDBCol md="15">
//                   <MDBFormInline className="md-form mr-auto mb-4">
//                   <input className="form-control" name="searchItem" type="text"  value={this.state.searchItem} onChange={this.fixSearchItem} placeholder="Search product" aria-label="Search" />                    
//                   <Tooltip title="Search" placement="bottom-start">
//                   <Link className="nav-link"  to={"/searchProduct/"+this.state.searchItem}><b>Search</b></Link>     
//                   </Tooltip>                  
//                   </MDBFormInline>
//                 </MDBCol>              
//                 <li className="nav-item">  
//                   <Link className="nav-link"  to={"/login"}><h5>Login</h5></Link>
//                 </li>
//                 <li className="nav-item">
//                 <Tooltip title="Sign Up" placement="bottom-start">
//                   <Link className="nav-link"  to={"/sign-up"}><h5>Sign Up</h5></Link>
//                    </Tooltip>    
//                 </li>
//               </ul>
//             }            
//           </div>
//         </div>
//       </nav>