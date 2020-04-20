import React, { useState, useEffect  } from 'react'
import axios from 'axios'; 
import { useHistory } from "react-router-dom";
import {toast } from 'react-toastify';
import './Cart.css'
import { Tooltip } from '@material-ui/core';
import './Home.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button,Container, Row, Col } from 'reactstrap';
function Profile() {
    const [customer, setCustomer] = useState([]);
    const CustomerId = {CustomerId: sessionStorage.getItem('userId') }
    const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
    let history = useHistory();
  useEffect(() => {
    async function fetchData() {
      const res = await axios.post('https://localhost:44376/api/GetMyProfile', CustomerId ,{headers:headers})     
        .then(res =>{
            console.log(res.data);           
            setCustomer(res.data)        
          
        })  
          
    }
    fetchData();
  },[]);

  function cart(){
    history.push("/cart");
  }
  function logout(){
    sessionStorage.removeItem("userInfo");  
    sessionStorage.clear("userId");
    history.push("/login");
    toast.success('Thanks for visiting our site!',{position:toast.POSITION.TOP_RIGHT, autoClose:3000})
  }
    return (
        <div className="cards">
            {customer.map(cust =>
            
            <div key={cust.customerId}>
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-md-4"> 
                            <CardImg top width="100%" src={ require('../images/gif1.gif')} />
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
                <div className="card">
                    <div className="row no-gutters">
                        
                        <div className="col-md-8">
                            <div className="card-body">
                                                                                                                                                             */}
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
