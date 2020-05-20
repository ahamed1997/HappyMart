import React  from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import {BrowserRouter as Router, Switch, Route, Link,Redirect } from 'react-router-dom';
import ProductList from './ProductList';
import Specifications from './Specifications';
import AddProduct from './AddProduct';

function Products() {
    const ProtectedRoute =({component:Component, ...rest}) =>{
        return <Route {...rest} render = {(props)=>{
          return sessionStorage.getItem("token") ? <Component {...props}/> : <Redirect to={'/login'} />
        }}    
        />
      }
    return (
        <React.Fragment>
        <Router>
            <Nav tabs defaultValue={0}>
                <NavItem>
                    <NavLink disabled><b>Edit Products</b></NavLink>
                </NavItem>
                <NavItem>
                <NavLink> <Link  to={{pathname:"/home/product/productlist"}}>Products</Link> </NavLink>
                </NavItem>
                <NavItem>
                <NavLink ><Link  to={{pathname:"/home/product/specification"}}>Specification</Link> </NavLink>
                </NavItem>
                <NavItem>
                <NavLink ><Link  to={{pathname:"/home/product/addproduct"}}>Add Product</Link> </NavLink>
                </NavItem>
            </Nav>
            <Switch>
                <ProtectedRoute path="/home/product/productlist" component={ProductList}/>
                <ProtectedRoute path="/home/product/specification" component={Specifications}/>
                <ProtectedRoute path="/home/product/addproduct" component={AddProduct}/>
                <ProtectedRoute path="/home/product/" component={ProductList}/>
            </Switch>
        </Router>    
    </React.Fragment>
    )
}

export default Products
