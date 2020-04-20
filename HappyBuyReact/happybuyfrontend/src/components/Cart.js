import React, { useState, useEffect  } from 'react';
import axios from 'axios'; 
import Rating from '@material-ui/lab/Rating';
import './Home.css'; 
import { Tooltip } from '@material-ui/core';
import Image from './Image';
import { useHistory } from "react-router-dom";
import {toast } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Cart.css'
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button,Container, Row, Col } from 'reactstrap';
function Cart() {
    const [products, setProducts] = useState([]);
    const CartCustomerId = {CartCustomerId: sessionStorage.getItem('userId') }
    const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
    let history = useHistory();
    let prod = [];
  useEffect(() => {
    async function fetchData() {
      const res = await axios.post('https://localhost:44376/api/GetCartItems', CartCustomerId ,{headers:headers})     
        .then(res =>{
            console.log(res.data);
           if(res.data.length != 0)
           {
            setProducts(res.data)
           } else{
            history.push('/emptyCart');
        }
          
        })  
          
    }
    fetchData();
  },[]);
   
  function decreaseCartdetails(cart){
            console.log(cart)
            const CartUpdate = {CartCustomerId:sessionStorage.getItem('userId'),CartId:cart.cartId,CartQuantity:cart.cartQuantity-1}
        if(cart.cartQuantity != 1)
        {
            const res =  axios.post('https://localhost:44376/api/UpdateCartQuantity', CartUpdate ,{headers:headers})     
            .then(res =>{
                console.log(res.data);
            setProducts(res.data)})  
        }else{
            const removeCartItem = {CartCustomerId:sessionStorage.getItem('userId'),CartId:cart.cartId};
            const res =  axios.post('https://localhost:44376/api/RemoveCartItem', removeCartItem ,{headers:headers})     
            .then(res =>{
                console.log(res.data)
                if(res.data.length != 0){
                    setProducts(res.data)
                    toast.warn(cart.productName +' removed from cart!',{position:toast.POSITION.TOP_CENTER, autoClose:3000})

                }
                else{
                    history.push('/emptyCart');
                }
            })  
        }
  }
  function removeCartItem(product){
    const removeCartItem = {CartCustomerId:sessionStorage.getItem('userId'),CartId:product.cartId};
    const res =  axios.post('https://localhost:44376/api/RemoveCartItem', removeCartItem ,{headers:headers})     
            .then(res =>{
                debugger
                console.log(res.data)
                if(res.data.length != 0){
                    setProducts(res.data)
                    toast.warn(product.productName +' removed from cart!',{position:toast.POSITION.TOP_CENTER, autoClose:3000})

                }
                else{
                    history.push('/emptyCart');
                }
            })  
  }
   function increaseCartdetails(cart){
      
    if(cart.cartQuantity < 5)
        {
            const CartUpdate = {CartCustomerId:sessionStorage.getItem('userId'),CartId:cart.cartId,CartQuantity:cart.cartQuantity+1}
            const res =  axios.post('https://localhost:44376/api/UpdateCartQuantity', CartUpdate ,{headers:headers})     
            .then(res =>{
                console.log(res.data);
            setProducts(res.data)})  

        }else{
            toast.error('Sorry, You can add only 5 items in Cart at a time!',{position:toast.POSITION.TOP_CENTER, autoClose:3000})
        }
    }

    function filterProducts(){
        for(let i=0;i<products.length;i++)
        {
            if(products[i].productQuantity > 5)
            {
                prod.push(products[i]);
            }
        }
    }

    return (
        <div className="cards">
            {
            products.map(product =>
                <div key={product.productId}>
                <div className="card">
                <div className="row no-gutters">
                  <div className="col-md-4">                    
                  <Image match={product.productId}/>  
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.productName}</h5>                    
                        <p > <b className="price"> Price : &#x20b9;{product.productPrice}</b></p>
                    {product.productQuantity >5 ?
                    <div>
                     <strike>&#x20b9;{product.productPrice*2}</strike> 
                     <i> You save : &#x20b9;{product.productPrice}</i>
                     <p className="description">Brand : {product.productBrand} &nbsp;&nbsp;&nbsp;</p>
                     Quantity :<button onClick={decreaseCartdetails.bind(this,product)} className="btn btn-outline-warning">-</button>&nbsp;&nbsp;
                     <b>{product.cartQuantity}</b>&nbsp;&nbsp;
                            <button onClick={increaseCartdetails.bind(this,product)} className="btn btn-outline-warning">+</button> &nbsp;&nbsp;&nbsp;
                            <b> Price :&nbsp;{product.cartQuantity}  x {product.productPrice} =  &#x20b9;{product.cartPrice}</b>&nbsp;&nbsp;
                            <Link onClick={removeCartItem.bind(this,product)} className="btn btn-danger">Remove</Link>&nbsp;&nbsp;&nbsp;
                            <div className="card">
                                            <Link to={{pathname:"/placeOrders",
                                                    state:{
                                                    placeProduct : product
                                                    }}}
                                                className="btn btn-primary ">BUY </Link>  
                                </div>
                    </div>
                      :(
                        <div>
                          <CardSubtitle>
                            <br/>
                                    <h2 className="Offers">"OUT OF STACK"</h2>
                                    <Link onClick={removeCartItem.bind(this,product)} className="btn btn-danger">Remove</Link>&nbsp;&nbsp;&nbsp;
                          </CardSubtitle>
                        </div>
                      )
                    }                           
                            </div>                            
                        </div>                  
                    </div>               
                </div>
            </div>
                
             
            )}
            <Link onClick={filterProducts} to={{pathname:"/placeOrders",
                    state:{
                    placeProduct : prod
            }}}className="btn btn-success btn-lg btn-block">BUY ALL</Link> 
        </div>
    )
}

export default Cart
