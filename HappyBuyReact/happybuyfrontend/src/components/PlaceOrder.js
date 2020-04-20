// import { Tooltip } from '@material-ui/core';
// import React, { Component ,useRef} from 'react' 
// import Image from './Image';
// export default class PlaceOrder extends Component {
//     constructor({ match, ...props }){  
//         console.log(match.params)
//                 super(props)  
//                 this.state = {  
//                     searchItem :'',
//                     products:[],
//                     paidFor:false,
//                     loaded:false
//                     }  
                   
//             }  
//     componentDidMount(){
//         console.log(this.props.location.state)
//         const{placeProduct}= this.props.location.state 
//         this.setState({products:placeProduct})
        
//     }
//     render() {
  
//         return (
//               <div>
//                  <h1>{this.state.products.productId}</h1>
//               </div>      
//         )
    
//       }
    
// }

import React, { useState, useEffect,useRef  } from 'react'
import axios from 'axios';  
import './Placeorder.css';
import {  Card, CardImg, CardText, CardBody,  CardTitle, CardSubtitle,Container, Row, Col } from 'reactstrap';
import Image from './Image';
import {toast } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import PaymentResult from './PaymentResult';
import './EmptyCart.css';
import { Result, Button } from 'antd';


function PlaceOrder(...match) {
  console.log(match)
 let ShippingAddressStreet;let ShippingAddressCity;let ShippingAddressState;let ShippingAddressZipcode;let ShippingAddressCountryCode;let PaymentDetailsPayerName;let PaymentDetailsPayeeEmailId;let PaymentDetailsPayeeId; let res1=0;let res2=0;let res3=0;
  const [product,setProduct] = useState(match[0].location.state.placeProduct);
  const [paidFor,setPaidFor] = useState(false);
  const [loaded,setLoaded] = useState(false);
  const [quantity,setQuatity]=useState(1);
  const [count,setCount]=useState(0);
  const [totalPrice,setTotalPrice]=useState(match[0].location.state.placeProduct.productPrice);
  const [usdAmount,setUSD]=useState(0);
  const [orders,setOrder]=useState([]);
  const [payerdetails,setPayerdetails]=useState([]);
  const [purchaseUnitsDetails, setPurchaseDetails] = useState([]);
  const [result,setResult]=useState(0);
  let paypalRef = useRef();
  let usd;    let history = useHistory();
  useEffect(()=>{
    usd = totalPrice/76.18;
    usd = Number((usd).toFixed(2));
    setUSD(usd);
  const script = document.createElement("script");
  script.src = "https://www.paypal.com/sdk/js?client-id=ARNcFazYFHPAjKADrd_Zk_BOy5BrMPclb0gB9LVKzBLlr7WnOAiOBIVzb_vjbEPwixdmlLUFa-I0BDrb"
  script.addEventListener("load",()=>setLoaded(true));
  document.body.appendChild(script);
  if(loaded){
    setTimeout(()=>{
      window.paypal.Buttons({
        createOrder: (data,actions)=>{
          return actions.order.create({
            purchase_units:[
              {
                INR : totalPrice,
                amount:{
                  currency_code : "USD",
                  value:usdAmount
                }
                
              }
            ]
          });
        },
        onApprove: async(data,actions)=>{
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log(order)        
          setOrder(order);
          setPayerdetails(order.payer)
          setPurchaseDetails(order.purchase_units)       

        }       
      }).render(paypalRef); 
      if(paidFor){
        if((orders.id != null) && (count <1))
        {setCount(1);return;}
      }  

      if(count === 1){
        for(let i=0; i< purchaseUnitsDetails.length; i++) 
        {
           ShippingAddressStreet = (purchaseUnitsDetails[i].shipping.address.address_line_1); 
           ShippingAddressCity = purchaseUnitsDetails[0].shipping.address.admin_area_2;
           ShippingAddressState = purchaseUnitsDetails[0].shipping.address.admin_area_1;
           ShippingAddressZipcode = purchaseUnitsDetails[0].shipping.address.postal_code;
           ShippingAddressCountryCode = purchaseUnitsDetails[0].shipping.address.country_code;
           PaymentDetailsPayerName = purchaseUnitsDetails[0].shipping.name.full_name;
           PaymentDetailsPayeeEmailId = purchaseUnitsDetails[0].payee.email_address;
           PaymentDetailsPayeeId = purchaseUnitsDetails[0].payee.merchant_id;
        }
        const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
        let order = [];
              order.push({
            OrderDetailsProductId:product.productId,
            OrderDetailsQuantity:quantity,
            OrderDetailsPrice:totalPrice,
            ShippingAddressName:PaymentDetailsPayerName,
            ShippingAddressStreet:ShippingAddressStreet,
            ShippingAddressCity:ShippingAddressCity,
            ShippingAddressState:ShippingAddressState,
            ShippingAddressZipcode:ShippingAddressZipcode,
            ShippingAddressCountryCode:ShippingAddressCountryCode,
            OrdersCustomerId:sessionStorage.getItem('userId'),
            PaymentDetailsPaymentModeId:10,
            PaymentDetailsAmountPaid:totalPrice,
            PaymentDetailsTransactionId:orders.id,
            PaymentDetailsPayerId:payerdetails.payer_id,
            PaymentDetailsPayerName:payerdetails.name.given_name + ' ' + payerdetails.name.surname,
            PaymentDetailsPayeeId:PaymentDetailsPayeeId,
            PaymentDetailsPayeeEmailId:PaymentDetailsPayeeEmailId});
          axios.post('https://localhost:44376/api/PlaceOrder', order ,{headers:headers})     
          .then(res =>{
              console.log(res.data); 
            res2 = res.data; 
              
          })
        }
    });   
  }
  });
  function decreaseQuantity(productPrice){
 
    if(quantity >1){
      setQuatity(Math.ceil(quantity-1));
      setTotalPrice(((quantity-1) * productPrice));
    }
  }

  function increaseQuantity(productPrice){
    if(quantity < 5){
      console.log(usdAmount);
      setQuatity(Math.ceil(quantity+1));
      console.log(quantity)
      setTotalPrice(((quantity+1) * productPrice));
      console.log(usdAmount);
    }
  }
  
    return (
      <div className="cards">
        {paidFor?(
           <div className="card">
           <div className="row no-gutters">
             <div className="col-md-10">      
            <Result
    status="success"
    title="Successfully Purchased.. Thanks for the purchase!"
    subTitle="Your Order Id is : " subTitle={orders.id}
    extra={[
      <Button type="primary" key="console">
       <a href="/order">Check Order</a>
      </Button>,
      <Button key="buy"><a href="/home">Buy Again</a></Button>,
    ]}
  /></div></div>
          </div>
        ):(
          <div className="card">
            <div>
              <div>
                <div className="row no-gutters">
                  <div className="col-md-2">  
                    <div className="placeOrderImage">
                    <Image match={product.productId}/>  
                    </div>              
                  </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title">{product.productName}</h5>   
                      
                          Quantity :    
                          <button  className="btn btn-outline-warning" onClick={decreaseQuantity.bind(this,product.productPrice)}>-</button>&nbsp;&nbsp;
                          <b> {quantity}</b>&nbsp;&nbsp;
                          <button  className="btn btn-outline-warning"onClick={increaseQuantity.bind(this,product.productPrice)}>+</button> &nbsp;
                          <b className="price"> Price : &#x20b9;{totalPrice}</b>
                          </div>  
                          <div className="card">
                              <div className="col-md-20" >
                                  <div className="card-body">  
                                      <div>  
                                      <h5 className="h4">Total Payable Amount : &#x20b9;{totalPrice}&nbsp;&nbsp;(USD $ {usdAmount}) <i><small>Inclusive of all taxes.</small></i> </h5>                                          
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>                  
                    </div>               
                  </div>
                </div>   <Link to={{pathname:"/home"}} className="btn btn-danger">CANCEL ORDER</Link>              
                <div className="paymentButtons">
                <b><i>Please select Payment type</i> </b>
                <br/><br/>
                    <div  className="Buttons" ref={v=>(paypalRef = v)}/>
                 </div> 
             </div>
        )}
      
      
      </div>
    )
}

export default PlaceOrder


