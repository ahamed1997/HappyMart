import React, { useEffect, useState }  from 'react'
import { Table } from 'reactstrap';
import {Button,notification} from 'antd';
import AuthService from './AuthService';
import EditSpecification from './EditSpecification';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const UpdateSpecification = ({...match}) =>{
    const [specification, setSpecification] = useState([]);
    const text = 'Are you sure to delete this item?';
    const { confirm } = Modal;
  useEffect(() => {
   
    async function fetchData() {
        const key = {SpecificationProductId: match.product.productId}
        console.log(key)
        AuthService.getSpecification(key)
        .then(result=>{
            setSpecification(result.data);
        })
        .catch((error) => {
            AuthService.errorHandling(error)
        })
    }
    fetchData();
  });
   const deletespecification = (data) =>{
    confirm({
        title: 'Are you sure delete this task?',
        icon: <ExclamationCircleOutlined />,
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
            
       const key = {SpecificationId: data.specificationId, SpecificationProductId:data.specificationProductId}
    AuthService.deleteSpecification(key)
    .then(result=>{
        setSpecification(result.data);
    })
    notification['success']({
        message: 'Deleted Successfully!',
        description:
          '',
      });  
        },
        onCancel() {
          console.log('Cancel');
        },
      });
   
   }
   
    return (
        <div>
            <div>
                 <Table bordered responsive >
                          <thead>
                                <tr >
                                    <th >Name</th>
                                    <th>Value </th>
                                    <th>Edit </th>
                                    <th>Delete </th>
                                </tr>
                            </thead>
                        {specification.map(product =>
                        <tbody>
                            <tr>
                            <td >
                            {product.specificationName}
                            </td>
                            <td >
                            {product.specificationValue}
                            </td>
                            <td>
                            <EditSpecification specification={product}/>
                            </td>
                            <td>
                            <Button type="primary" danger onClick={deletespecification.bind(this, product)}>
                            Delete
                            </Button>
                            {/* <Popconfirm placement="topRight"  title={text}  onConfirm={deletespecification.bind(this, product)}  okText="Yes" cancelText="No" >
                            <Button type="primary" danger><RestOutlined /></Button>&nbsp;&nbsp;&nbsp;
                            </Popconfirm> */}
                            </td>
                            </tr>
                        </tbody>
                           )} 
                    </Table>
            </div>
        </div>
    )
}

export default UpdateSpecification

