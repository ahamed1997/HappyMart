import React,{useEffect,useState} from 'react'
import AuthService from './AuthService';

export default function PaymentResult({...match}) {

  let results = [];
  let ShippingAddressStreet;let ShippingAddressCity;let ShippingAddressState;let ShippingAddressZipcode;let ShippingAddressCountryCode;let PaymentDetailsPayerName;let PaymentDetailsPayeeEmailId;let PaymentDetailsPayeeId;
  let totalPrice = match.sendPrice;
  const [products] = useState(match.sendProducts);
  const [order] = useState(match.sendResult);
  const [payerdetails,setPayerdetails]=useState(match.sendResult.payer);
  const [purchaseUnitsDetails] = useState(match.sendResult.purchase_units);
  
  ShippingAddressStreet = (purchaseUnitsDetails[0].shipping.address.address_line_1); 
  ShippingAddressCity = purchaseUnitsDetails[0].shipping.address.admin_area_2;
  ShippingAddressState =purchaseUnitsDetails[0].shipping.address.admin_area_1;
  ShippingAddressZipcode = purchaseUnitsDetails[0].shipping.address.postal_code;
  ShippingAddressCountryCode = purchaseUnitsDetails[0].shipping.address.country_code;
  PaymentDetailsPayerName = purchaseUnitsDetails[0].shipping.name.full_name;
  PaymentDetailsPayeeEmailId = purchaseUnitsDetails[0].payee.email_address;
  PaymentDetailsPayeeId = purchaseUnitsDetails[0].payee.merchant_id;
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
      debugger
      if(match.count  === order.length)
      { 
      AuthService.placeOrder(results)
        .then(res =>{
            return;
        })
      }
    }
    fetchData();
  },[]);
      return (
        <div>
         <div className="emptyCartImage">  
             <div className="emptyCartImage"><img alt="" style={{width:'500px'}} src={ require('../images/success.gif')} />
             </div>  
             <b>Payment Successfull..!! Please Check your Orders.</b>
             <a href="/order"><b><i> Click here</i></b></a> <b>to view Order Details</b>             
           </div>
        </div>
      )
}
