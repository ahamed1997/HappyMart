import React, { useState, useEffect,useRef  } from 'react'
import axios from 'axios';  
import './Placeorder.css';
import Image from './Image';
import {toast } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import PaymentResult from './PaymentResult';
import './EmptyCart.css';
import { Table,Collapse, Button, CardBody, Card ,Modal, ModalHeader, ModalBody, ModalFooter,Container, Row, Col   } from 'reactstrap';

function PlaceOrderCart(...match) {
  console.log(match[0].location.state.placeProduct)
  let products = [];
  if(match[0].location.state.placeProduct.length>0 )
  {
    for(let i=0;i<match[0].location.state.placeProduct.length;i++)
    {
      products.push(match[0].location.state.placeProduct[i]);
    }
  }else{
    products.push(match[0].location.state.placeProduct);
  }
  console.log(products)
  const [paidFor,setPaidFor] = useState(false);
  const [loaded,setLoaded] = useState(false);
  const [count,setCount]=useState(0);
  const [usdAmount,setUSD]=useState(0);
  const [orders,setOrder]=useState([]);
  const [payerdetails,setPayerdetails]=useState([]);
  const [purchaseUnitsDetails, setPurchaseDetails] = useState([]);
  const [result,setResult]=useState([]);
  let paypalRef = useRef();
  let usd;    let history = useHistory();
  const [totalPrice,setTotalPrice]=useState();
  const [quantity,setQuatity]=useState(match[0].location.state.placeProduct.cartQuantity);
  

  useEffect(()=>{
   
    let temp = 0; 
    for(let i = 0; i<products.length;i++)
    {
      temp = temp + products[i].cartPrice;
    }
    setTotalPrice(temp);
    temp=0;
    for(let i = 0; i<products.length;i++)
    {
      temp = temp + products[i].cartQuantity;
    }setQuatity(temp);
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
          setOrder(order);
          // setPayerdetails(order.payer)
          // setPurchaseDetails(order.purchase_units)       

        }       
      }).render(paypalRef); 
      // if(paidFor){
      //   if((orders.id != null) && (count <1))
      //   {setCount(1);return;}
      // }  

      // if(count === 1){
      //   for(let i=0; i< purchaseUnitsDetails.length; i++) 
      //   {
      //      ShippingAddressStreet = (purchaseUnitsDetails[i].shipping.address.address_line_1); 
      //      ShippingAddressCity = purchaseUnitsDetails[0].shipping.address.admin_area_2;
      //      ShippingAddressState = purchaseUnitsDetails[0].shipping.address.admin_area_1;
      //      ShippingAddressZipcode = purchaseUnitsDetails[0].shipping.address.postal_code;
      //      ShippingAddressCountryCode = purchaseUnitsDetails[0].shipping.address.country_code;
      //      PaymentDetailsPayerName = purchaseUnitsDetails[0].shipping.name.full_name;
      //      PaymentDetailsPayeeEmailId = purchaseUnitsDetails[0].payee.email_address;
      //      PaymentDetailsPayeeId = purchaseUnitsDetails[0].payee.merchant_id;
      //   }
      //   const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
      //   if(result.length != products.length){
      //  console.log(result.length)
      //  debugger
      //     for(let i=0; i<products.length;i++)
      //     {
            
      //       setResult([
      //         ...result,
      //         {OrderDetailsProductId:products[i].productId,
      //         OrderDetailsQuantity:products[i].cartQuantity,
      //         OrderDetailsPrice:products[i].cartPrice,
      //         ShippingAddressName:PaymentDetailsPayerName,
      //         ShippingAddressStreet:ShippingAddressStreet,
      //         ShippingAddressCity:ShippingAddressCity,
      //         ShippingAddressState:ShippingAddressState,
      //         ShippingAddressZipcode:ShippingAddressZipcode,
      //         ShippingAddressCountryCode:ShippingAddressCountryCode,
      //         OrdersCustomerId:sessionStorage.getItem('userId'),
      //         PaymentDetailsPaymentModeId:10,
      //         PaymentDetailsAmountPaid:totalPrice,
      //         PaymentDetailsTransactionId:orders.id,
      //         PaymentDetailsPayerId:payerdetails.payer_id,
      //         PaymentDetailsPayerName:payerdetails.name.given_name + ' ' + payerdetails.name.surname,
      //         PaymentDetailsPayeeId:PaymentDetailsPayeeId,
      //         PaymentDetailsPayeeEmailId:PaymentDetailsPayeeEmailId}
      //       ])        
      //     }
      //     return;
      //   }
      
        // history.push('/paymentresults',state? :{
        //   match : result
        // })
        // if((result.length == products.length)&& (res2 != 0)){
        // axios.post('https://localhost:44376/api/PlaceOrder', result ,{headers:headers})     
        // .then(res =>{
        //     console.log(res.data); 
        //   res2 = res.data; 
        //     return;
        // })}
       
        // }
    });   
  }
  });
 

 
  
    return (
      <div className="cards">
        {orders != ''?(
          <div>
         <PaymentResult   sendResult = {orders} sendProducts={products} sendPrice={totalPrice}/>
     
          </div>
        ):(
          <div>
            <div><Link to={'/home'}><img className="logo" src={ require('../images/logo1.jpg') } /><b>Home</b></Link></div>
              <Table responsive>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map(product =>
                  
                        <tr>
                          <td>{product.productName}</td>
                          <td>{product.cartQuantity}</td>
                          <td>&#x20b9;{product.cartPrice}</td>
                        </tr>
                  
                )}  </tbody> 
                  <tr >
                    <td className="text-center"><b>Total :</b></td>
                    <td><b>{quantity}</b></td>
                    <td> <b>&nbsp; &#x20b9;{totalPrice}</b></td>              
                  </tr> 
                  <tr>
                    <td><b>Please select payment type :</b></td>
                    <td>
                    <div   ref={v=>(paypalRef = v)}/>
                    </td>
                    <td></td>
                  </tr>      
              </Table>
          </div>
        )}
      </div>
    )
}

export default PlaceOrderCart


