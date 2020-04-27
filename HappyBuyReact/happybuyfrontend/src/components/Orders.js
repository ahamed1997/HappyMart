import React, { useState, useEffect  } from 'react';
import axios from 'axios'; 
import { useHistory } from "react-router-dom";
import { Table, Button, Modal, ModalHeader, ModalBody, Container, Row, Col   } from 'reactstrap';
import Pagination from './Pagination';

function Orders(props) {
    const [orders, setOrders] = useState([]);
    const [currentPage,setCurrentPage]= useState(1);
    const [productPerPage, setproductPerPage] = useState(5);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
    let history = useHistory();
  useEffect(() => {
    async function fetchData() {
        const product = {OrdersCustomerId: sessionStorage.getItem('userId') }
        const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
      await axios.post('https://localhost:44376/api/GetOrderDetails', product ,{headers:headers})     
        .then(res =>{
            console.log(res.data);
           if(res.data.length !== 0)
           {
            setOrders(res.data)
           } else{
            history.push('/emptyCart');
        }
          
        })  
          
    }
    fetchData();
  },[]);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentOrders = orders.slice(indexOfFirstProduct,indexOfLastProduct);
  const paginate = (pageNumber)=> setCurrentPage(pageNumber);
    return (
        <div>           
             <Table responsive>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Order Id </th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Date of Ordered</th>
                        <th>Order Status</th> 
                        <th>View Details</th>                        
                    </tr>
                </thead>
                {
                currentOrders.map(order =>
                    <tbody>
                        <tr key ={order.orderId}>
                            <th scope="row"></th>
                            <td>{order.paymentDetailsTransactionId}</td>
                            <td>{order.productName}</td>
                            <td>{order.orderDetailsQuantity}</td>
                            <td>{order.orderDetailsPrice}</td>
                            <td>{order.ordersDateOfOrder}</td>
                            <td>{order.ordersStatusState}</td>
                            <td>
                            <Button color="primary" onClick={toggle}>View</Button>
                               
                            </td>
                           
                        </tr>
                            <Modal isOpen={modal} toggle={toggle} >
                            <ModalHeader toggle={toggle} close={closeBtn}><img className="logo" alt="" src={ require('../images/logo1.jpg') } />Order Details</ModalHeader>
                                <ModalBody>
                                <Container>
                                        <Row xs="2">
                                            <Col><b>Order Id  : </b>{order.paymentDetailsTransactionId} </Col>
                                            <Col><b>Purchase time :</b> {order.ordersDateOfOrder}</Col>
                                            <Col><b>Payer Name : </b>{order.paymentDetailsPayerName}</Col>
                                            <Col><b>Payer Id :</b> {order.paymentDetailsPayerId}</Col>
                                            <Col><b>Status :</b> {order.ordersStatusState}</Col>
                                        </Row>
                                        <hr/>
                                        <h4 className="h4">Product Details</h4>  
                                        <Row xs="2">                                      
                                            <Col><b>Product Name : </b>{order.productName}</Col>
                                            <Col><b>Quantity : </b>{order.orderDetailsQuantity}</Col>
                                            <Col><b>Total Price : </b>{order.orderDetailsPrice}</Col>
                                        </Row>
                                        <hr/>
                                        <h4 className="h4">Shipping Details</h4> 
                                        <Row xs="2">
                                            <Col><b>Delivery to : </b>{order.shippingAddressName}</Col>
                                            <Col><b>Address : </b>{order.shippingAddressStreet},{order.shippingAddressCity},{order.shippingAddressState}</Col>
                                            <Col><b>Potalcode : </b>{order.shippingAddressZipcode}</Col>
                                            <Col><b>Country code : </b>{order.shippingAddressCountryCode}</Col>
                                        </Row>
                                    </Container>
                                </ModalBody>
                            </Modal>                    
                    </tbody>
                    )}                
            </Table>
            <div className="Pagination">
    <Pagination productsPerPage={productPerPage} totalProducts={orders.length} paginate={paginate}/>
      </div>
        </div>
    )
}

export default Orders
