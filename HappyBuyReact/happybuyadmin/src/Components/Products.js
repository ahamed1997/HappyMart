import React  from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import Specifications from './Specifications';
import AddProduct from './AddProduct';

function Products() {
    
    return (
        <>
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
                <Route path="/home/product/productlist" component={ProductList}/>
                <Route path="/home/product/specification" component={Specifications}/>
                <Route path="/home/product/addproduct" component={AddProduct}/>
                <Route path="/home/product/" component={ProductList}/>
            </Switch>
        </Router>    
    </>
    )
}

export default Products
