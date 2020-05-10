import React, { useState, useEffect  } from 'react';
import axios from 'axios'; 
import './Home.css'; 
import Image from './Image';
import { Spin} from 'antd';
import { PayCircleOutlined ,RestOutlined} from '@ant-design/icons';

import { useHistory ,Link } from "react-router-dom";
import {toast } from 'react-toastify';
import './Cart.css'
import { Popconfirm, message, Button } from 'antd';
import {CardSubtitle } from 'reactstrap';
import AuthService from './AuthService';
function Cart() {
    const [products, setProducts] = useState([]);
    const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
    let history = useHistory();
    let prod = [];
    const text = 'Are you sure to remove this item?';
    const [spinner,setSpinner]=useState(false);


  useEffect(() => {
    setSpinner(true);

    async function fetchData() {
    const CartCustomerId = {CartCustomerId: sessionStorage.getItem('userId') }
      AuthService.getCartItems(CartCustomerId)  
        .then(res =>{
            setSpinner(false);
           if(res.data.length !== 0)
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
            const CartUpdate = {CartCustomerId:sessionStorage.getItem('userId'),CartId:cart.cartId,CartQuantity:cart.cartQuantity-1}
        if(cart.cartQuantity !== 1)
        {
            AuthService.updateCart(CartUpdate)
            .then(res =>{
            setProducts(res.data)})  
        }else{
            const removeCartItem = {CartCustomerId:sessionStorage.getItem('userId'),CartId:cart.cartId};
            AuthService.removefromCart(removeCartItem)
            .then(res =>{
                if(res.data.length !== 0){
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
        AuthService.removefromCart(removeCartItem)
            .then(res =>{
                if(res.data.length !== 0){
                    setProducts(res.data)
                    message.info(product.productName +' removed from cart!');
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
            AuthService.updateCart(CartUpdate)
            .then(res =>{
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
                  {spinner && (<div className="spin" style={{"float":"center"}}><Spin size="large" /></div> )}
        {products.length>0 && <div>
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
                                    <p><b className="price"> Price : &#x20b9;{product.productPrice}</b></p>
                                        {product.productQuantity >5 ?
                                            <div>
                                                <strike>&#x20b9;{product.productPrice*2}</strike> 
                                                <i> You save : &#x20b9;{product.productPrice}</i>
                                                <p className="description">Brand : {product.productBrand} &nbsp;&nbsp;&nbsp;</p>
                                                Quantity :
                                                <button onClick={decreaseCartdetails.bind(this,product)}  className="btn btn-outline-warning" disabled={product.cartQuantity = 1  ? false : true}>-</button>&nbsp;&nbsp;
                                                <b>{product.cartQuantity}</b>&nbsp;&nbsp;
                                                <button onClick={increaseCartdetails.bind(this,product)} className="btn btn-outline-warning">+</button> &nbsp;&nbsp;&nbsp;
                                                <b> Price :&nbsp;{product.cartQuantity}  x {product.productPrice} =  &#x20b9;{product.cartPrice}</b>&nbsp;&nbsp;
                                                <Popconfirm placement="topRight"  title={text}  onConfirm={removeCartItem.bind(this,product)}  okText="Yes" cancelText="No" >
                                                <Button danger><RestOutlined />Remove</Button>&nbsp;&nbsp;&nbsp;
                                                </Popconfirm>
                                                <div className="card">
                                                    <Link to={{pathname:"/placeOrders",
                                                            state:{
                                                            placeProduct : product
                                                            }}}
                                                        className="btn btn-primary "> <PayCircleOutlined /> BUY </Link>  
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
                                        )}                           
                                </div>                            
                            </div>                  
                        </div>               
                    </div>
                </div>               
            )}
            
            <Link onClick={filterProducts} to={{pathname:"/placeOrders",
                    state:{
                    placeProduct : prod
            }}}className="btn btn-success btn-lg btn-block"><PayCircleOutlined /> BUY ALL</Link> 
            </div>}
           
        </div>
    )}

export default Cart
