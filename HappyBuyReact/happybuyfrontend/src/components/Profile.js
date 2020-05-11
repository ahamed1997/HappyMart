import React, { useState, useEffect  } from 'react'
import { Avatar, Button } from 'antd';
import './Cart.css'
import './Home.css'
import AuthService from './AuthService';
import {CardImg} from 'reactstrap';
import { UserOutlined } from '@ant-design/icons';

function Profile() {
    const [customer, setCustomer] = useState([]);
  useEffect(() => {
    const key = {CustomerId: sessionStorage.getItem('userId') }
    async function fetchData() {
        AuthService.getMyProfile(key)
        .then(res =>{
            console.log(res.data);           
            setCustomer(res.data)        
        })  
    }
    fetchData();
  },[]);

    return (
        <div className="cards">
            {customer.map(cust =>
            <div key={cust.customerId}>
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-md-4"> 
                        <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} shape="square" size={194} icon={<UserOutlined />}>
                        {cust.customerFirstName}
                        </Avatar>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                               <tr><b> Firstname : {cust.customerFirstName} </b></tr>
                               <br/>
                               <tr><b>Latname :  {cust.customerLastName}</b></tr>
                               <br/>
                                <tr> <b>Mobile : {cust.customerMobile}</b>   </tr>    
                                <br/>
                                <tr> <b>Mobile : {cust.customerEmail}</b>   </tr>   
                                                                                                                                                                    
                            </div>                                                        
                        </div>                  
                    </div>               
                </div>
            </div>
            )}                  
        </div>
    )
}

export default Profile
