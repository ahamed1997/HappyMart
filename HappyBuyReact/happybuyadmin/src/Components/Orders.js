import React, { useEffect,useState } from 'react'
import AuthService from './AuthService';
import { Table  } from 'reactstrap';
import {Badge} from 'antd';
import ViewOrderDetails from './ViewOrderDetails';
import UpdateStatus from './UpdateStatus';
import dateFormat from 'dateformat';

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        AuthService.getAllOrders()
        .then(result=>{
            setOrders(result.data);
            console.log(result.data)
        })
        .catch((error) => {
            AuthService.errorHandling(error)
        })
    }, [])
    return (
        <>
            <Table responsive   bordered>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Delivery Address</th>
                        <th>Amount Paid</th>
                        <th>Date of Order</th>
                        <th>Order Status</th>
                        <th>Last Modified</th>
                        <th>View Order</th>
                        <th>Edit Order Status</th>
                    </tr>
                </thead>
                {orders.map(order=>
                <tbody>
                    <tr>
                        <td>{order.ordersId}</td>
                        <td>{order.shippingAddressName}</td>
                        <td>{order.shippingAddressStreet},{order.shippingAddressCity},{order.shippingAddressState}-{order.shippingAddressZipcode},{order.shippingAddressCountryCode}</td>
                        <td> &#x20b9;{order.paymentDetailsAmountPaid}.00</td>
                        <td>{dateFormat(order.ordersDateOfOrder, "dS mmmm yyyy")}</td>
                        <td>
                        {order.ordersOrderStatusId === 6 || order.ordersOrderStatusId === 8 ? <Badge status="error" text={order.ordersStatusState} />
                        : (order.ordersOrderStatusId === 5 || order.ordersOrderStatusId=== 7  ? <Badge status="success" text={order.ordersStatusState} />:
                        (<Badge status="processing" text={order.ordersStatusState} />))}
                        </td>
                        <td>{dateFormat(order.ordersDateOfOrderCompleted, "dS mmmm yyyy")}</td>
                        <td><ViewOrderDetails order={order}/></td>
                        <td><UpdateStatus order={order}/></td>
                    </tr>
                </tbody>
                )
                }
               
            </Table>
        </>
    )
}

export default Orders
