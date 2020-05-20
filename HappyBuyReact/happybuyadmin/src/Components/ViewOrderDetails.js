import React, { useState } from 'react'
import AuthService from './AuthService';
import {FormOutlined} from '@ant-design/icons';
import { Table,  ModalHeader, ModalBody} from 'reactstrap';
import {Button} from 'antd';
import dateFormat from 'dateformat';

import { Modal ,Descriptions, Badge} from 'antd';
function ViewOrderDetails({...match}) {
const [orders, setOrders] = useState([]);
const [modal, setModal] = useState(false);
const [order, setOrder] = useState([]);
const toggle = () =>
{
    setModal(!modal);
    console.log("object")
    const key = {OrdersId : match.order.ordersId}
    AuthService.getOrdersDetails(key)
    .then(result=>{
        console.log(result.data[0]);
        setOrder(result.data[0]);
        setOrders(result.data);
    }).catch((error) => {
        AuthService.errorHandling(error)

    })
} 
const handleOk = ()=>{
    setModal(!modal);
};
const handleCancel = ()=>{
    setModal(!modal);
};
  
  
    return (
        <React.Fragment>
            <Button type="primary" onClick={toggle} style={{ background: "#1890ff;", borderColor: "#1890ff;" }}><FormOutlined/>View</Button>
            <Modal  visible={modal} style={{ top: 20 }}  onOk={handleOk} onCancel={handleCancel} width={1040}>
            <ModalHeader><img className="logo" alt="" src={ require('../Images/logo.png')} />Order Details</ModalHeader>
            <ModalBody>
                             

            <Descriptions  bordered>
                <Descriptions.Item label="Order Id">{order.ordersId}</Descriptions.Item>
                <Descriptions.Item label="Billing Id">{order.paymentDetailsTransactionId}</Descriptions.Item>
                <Descriptions.Item label="Date of Order">{dateFormat(order.ordersDateOfOrder, "dS mmmm yyyy") }</Descriptions.Item>
                <Descriptions.Item label="Last Modified">{dateFormat(order.ordersDateOfOrderCompleted, "dS mmmm yyyy")}</Descriptions.Item>
                <Descriptions.Item label="Total Amount" span={2}>
                &#x20b9; {order.paymentDetailsAmountPaid}.00
                </Descriptions.Item>
                <Descriptions.Item label="Order Status" span={3}>
                {order.ordersOrderStatusId === 6 || order.ordersOrderStatusId === 8 ? <Badge status="error" text={order.ordersStatusState} />
                : (order.ordersOrderStatusId === 5 || order.ordersOrderStatusId=== 7  ? <Badge status="success" text={order.ordersStatusState} />:
                (<Badge status="processing" text={order.ordersStatusState} />))}
                </Descriptions.Item>
                <Descriptions.Item label="Payer Name">{order.paymentDetailsPayerName}</Descriptions.Item>
                <Descriptions.Item label="Payer Id">{order.paymentDetailsPayerId}</Descriptions.Item>
                <Descriptions.Item label="Payee Id">{order.paymentDetailsPayeeId}</Descriptions.Item>
                <Descriptions.Item label="Shipping Details">
                    {order.shippingAddressName}
                    <br />
                    {order.shippingAddressStreet}
                    <br />
                    {order.shippingAddressCity}
                    <br />
                    {order.shippingAddressState} - {order.shippingAddressZipcode}
                    <br />
                    {order.shippingAddressCountryCode}
                    <br />
                    </Descriptions.Item>
                </Descriptions>
                <Table responsive   bordered>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Product Id</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {orders.map(order=>
                    <tbody>
                        <tr>
                            <td>{order.ordersId}</td>
                            <td>{order.productId}</td>
                            <td>{order.productName}</td>
                            <td>{order.orderDetailsQuantity}</td>
                            <td> &#x20b9;{order.orderDetailsPrice}.00</td>
                            <td>{order.productBrand}</td>
                            <td>{order.ordersStatusState}</td>
                        </tr>
                    </tbody>
                )}
                </Table>
            </ModalBody>
        </Modal>
        </React.Fragment>
    )
}

export default ViewOrderDetails
