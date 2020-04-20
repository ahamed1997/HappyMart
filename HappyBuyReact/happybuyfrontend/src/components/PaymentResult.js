import React,{useEffect,useState} from 'react'
import axios from 'axios';  

export default function PaymentResult({...match}) {

  let results = [];
  let ShippingAddressStreet;let ShippingAddressCity;let ShippingAddressState;let ShippingAddressZipcode;let ShippingAddressCountryCode;let PaymentDetailsPayerName;let PaymentDetailsPayeeEmailId;let PaymentDetailsPayeeId; let res2=0;;
  let totalPrice = match.sendPrice;
  const [products,setProduct] = useState(match.sendProducts);
  const [order, setorder] = useState(match.sendResult);
  const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
  const [payerdetails,setPayerdetails]=useState(match.sendResult.payer);
  const [purchaseUnitsDetails, setPurchaseDetails] = useState(match.sendResult.purchase_units);
  ShippingAddressStreet = (purchaseUnitsDetails[0].shipping.address.address_line_1); 
  ShippingAddressCity = purchaseUnitsDetails[0].shipping.address.admin_area_2;
  ShippingAddressState =purchaseUnitsDetails[0].shipping.address.admin_area_1;
  ShippingAddressZipcode = purchaseUnitsDetails[0].shipping.address.postal_code;
  ShippingAddressCountryCode = purchaseUnitsDetails[0].shipping.address.country_code;
  PaymentDetailsPayerName = purchaseUnitsDetails[0].shipping.name.full_name;
  PaymentDetailsPayeeEmailId = purchaseUnitsDetails[0].payee.email_address;
  PaymentDetailsPayeeId = purchaseUnitsDetails[0].payee.merchant_id;
   console.log(totalPrice);
  for(let i=0; i<products.length;i++)
  {
    results.push({
      OrderDetailsProductId:products[i].productId,
          OrderDetailsQuantity:products[i].cartQuantity,
          OrderDetailsPrice:products[i].cartPrice,
          ShippingAddressName:PaymentDetailsPayerName,
          ShippingAddressStreet:ShippingAddressStreet,
          ShippingAddressCity:ShippingAddressCity,
          ShippingAddressState:ShippingAddressState,
          ShippingAddressZipcode:ShippingAddressZipcode,
          ShippingAddressCountryCode:ShippingAddressCountryCode,
          OrdersCustomerId:sessionStorage.getItem('userId'),
          PaymentDetailsPaymentModeId:10,
          PaymentDetailsAmountPaid:totalPrice,
          PaymentDetailsTransactionId:order.id,
          PaymentDetailsPayerId:payerdetails.payer_id,
          PaymentDetailsPayerName:payerdetails.name.given_name + ' ' + payerdetails.name.surname,
          PaymentDetailsPayeeId:PaymentDetailsPayeeId,
          PaymentDetailsPayeeEmailId:PaymentDetailsPayeeEmailId
    })
  } 
         
 
  useEffect(() => {
  
   
    async function fetchData() {
      if(match.count  == order.length)
      {
       const temp = await axios.post('https://localhost:44376/api/PlaceOrder', results ,{headers:headers})     
        .then(res =>{
            console.log(res.data); 
            return;
        })
      }
    }
    fetchData();
  },[order.length]);
   
    const sampleJSON = {"object": {"name": "Pluralsight","number": 1,"address": "India","website": "https://www.pluralsight.com/"}
      }
    
      return (
        <div>
         <div className="emptyCartImage">  
             <div className="emptyCartImage"><img style={{width:'500px'}} src={ require('../images/success.gif')} />
             
             </div>  
             <b>Payment Successfull..!! Please Check your Orders.</b>
             <a href="/order"><b><i> Click here</i></b></a> <b>to view Order Details</b>             
           </div>
        </div>
      )
}

// console.log("Time : " + orders.create_time)
// console.log("Payment Id :" + orders.id)
// console.log("Status" + orders.status)
// console.log("Payee Email Address : "+purchaseUnitsDetails[0].payee.email_address);
// console.log("Payee Id"+purchaseUnitsDetails[0].payee.merchant_id);
// console.log("Customer Email Address"+payerdetails.email_address);
// console.log("Payer Id :"+payerdetails.payer_id);
// console.log("Payer Name"+purchaseUnitsDetails[0].shipping.name.full_name);
// console.log("Payer Street"+purchaseUnitsDetails[0].shipping.address.address_line_1);
// console.log("Payer Lane"+purchaseUnitsDetails[0].shipping.address.admin_area_2)
// console.log("City/State"+purchaseUnitsDetails[0].shipping.address.admin_area_1)
// console.log("Postal code"+purchaseUnitsDetails[0].shipping.address.postal_code)
// console.log("Country code: "+purchaseUnitsDetails[0].shipping.address.country_code)