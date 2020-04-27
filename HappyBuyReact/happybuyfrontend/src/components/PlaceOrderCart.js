import React, { useState, useEffect,useRef  } from 'react'
import './Placeorder.css';
import {  Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import PaymentResult from './PaymentResult';
import './EmptyCart.css';
import { Table  } from 'reactstrap';

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
        }       
      }).render(paypalRef); 
   
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


