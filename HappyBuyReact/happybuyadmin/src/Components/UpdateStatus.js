import React ,{useState, useEffect} from 'react'
import { Table, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {Button} from 'antd';
import {RestOutlined,FileDoneOutlined} from '@ant-design/icons';
import AuthService from './AuthService';

function UpdateStatus({...match}) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [initialId, setId] = useState(match.order.ordersStatusId)
    const [initailstate,setInitialState]=useState(match.order.ordersStatusId);
    const [currentstatus, setCurrentStatus] = useState(match.order.ordersStatusState);
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
    const [status, setStatus] = useState([]);
    useEffect(() => {
        AuthService.getOrderStatus()
        .then(result=>{
            setStatus(result.data);
        }).catch((error) => {
            AuthService.errorHandling(error)
        })
    },[])
    const reset = ()=>
    {
        setId(initailstate);
    }
     const handleChange = (e) =>{
        setId(e.target.value);
     }

     const save = () =>
     {
         const key = {OrdersOrderStatusId :initialId, OrdersId : match.order.ordersId}
         AuthService.updateOrderStatus(key)
         .then(result=>console.log(result.data))
         setModal(!modal);
         window.location.reload();
     }
    return (
        <div>
            <Button type="primary" onClick={toggle} style={{ background: "#DC901B", borderColor: "#DC901B" }}><RestOutlined/>Edit</Button>
            <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle} close={closeBtn}>Update Status </ModalHeader>
                <ModalBody>
                <Table responsive   bordered>
                    <tbody>
                        <tr>
                            <td><b>Initial Status  </b></td>
                            <td><input className="form-control" value={currentstatus} disabled/></td>
                        </tr>
                        <tr>
                            <td> <b>Current Status</b></td>
                            <td>
                            
                            <select  className="form-control" selected value={initialId}  onChange={handleChange}>
                            <option disabled> -- select an status -- </option>

                                {status.map(st=>
                                        <option  selected  value={st.ordersStatusId}>{st.ordersStatusState}</option>

                                )}
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <td><Button   style={{"float":"center"}} onClick={save} type="primary"><FileDoneOutlined />Save</Button></td>
                            <td><Button   style={{"float":"center"}}onClick={reset} danger type="primary"><FileDoneOutlined />Reset</Button></td>
                        </tr>
                        <tr>
                            
                        </tr>
                    </tbody>
                    </Table>
                </ModalBody>
            </Modal> 
        </div>
    )
}

export default UpdateStatus
