import React ,{useState} from 'react'
import { Table, Button, Modal, ModalHeader, ModalBody, Container, Row, Col   } from 'reactstrap';

export default function ViewOrder({...order}) {
   
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
    
    return (
        <div>                  
             <Button color="primary" onClick={toggle}>View</Button> 
             <Modal isOpen={modal} toggle={toggle} >
                            <ModalHeader toggle={toggle} close={closeBtn}><img className="logo" alt="" src={ require('../images/logo1.jpg') } />Order Details</ModalHeader>
                                <ModalBody>
                                <Container>
                                        <Row xs="2">
                                            <Col><b>Order Id  : </b>{order.match.paymentDetailsTransactionId} </Col>
                                            <Col><b>Purchase time :</b> {order.match.ordersDateOfOrder}</Col>
                                            <Col><b>Payer Name : </b>{order.match.paymentDetailsPayerName}</Col>
                                            <Col><b>Payer Id :</b> {order.match.paymentDetailsPayerId}</Col>
                                            <Col><b>Status :</b> {order.match.ordersStatusState}</Col>
                                        </Row>
                                        <hr/>
                                        <h4 className="h4">Product Details</h4>  
                                        <Row xs="2">                                      
                                            <Col><b>Product Name : </b>{order.match.productName}</Col>
                                            <Col><b>Quantity : </b>{order.match.orderDetailsQuantity}</Col>
                                            <Col><b>Total Price : </b>{order.match.orderDetailsPrice}</Col>
                                        </Row>
                                        <hr/>
                                        <h4 className="h4">Shipping Details</h4> 
                                        <Row xs="2">
                                            <Col><b>Delivery to : </b>{order.match.shippingAddressName}</Col>
                                            <Col><b>Address : </b>{order.match.shippingAddressStreet},{order.shippingAddressCity},{order.shippingAddressState}</Col>
                                            <Col><b>Potalcode : </b>{order.match.shippingAddressZipcode}</Col>
                                            <Col><b>Country code : </b>{order.match.shippingAddressCountryCode}</Col>
                                        </Row>
                                    </Container>
                                </ModalBody>
                            </Modal>      
        </div>
    )
}
