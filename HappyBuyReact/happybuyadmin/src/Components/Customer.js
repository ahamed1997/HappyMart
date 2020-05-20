import React, {useState,useEffect} from 'react'
import AuthService from './AuthService';
import { Table  } from 'reactstrap';
import { TeamOutlined,} from '@ant-design/icons';

function Customer() {
    const [customers, setCustomers] = useState([]);
    const [spinner,setSpinner]=useState(false);

    useEffect(() => {
        setSpinner(true);
        AuthService.getAllCustomers()
        .then(result =>{
            console.log(result.data)
        setCustomers(result.data)        
        })
        .catch((error) => {
            AuthService.errorHandling(error)
        })
    },[])
    return (
        <div>
            <div>
            <h5 className="text-center" style={{fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}}><TeamOutlined /> CUSTOMER DETAILS</h5>
                <div >
                    <Table>
                    <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>FirstName </th>
                        <th>LastName</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                {customers.map( customer =>
                <tr key={customer.customerId}>
                    <td>
                        {customer.customerId}
                    </td>
                    <td>
                        {customer.customerFirstName}
                    </td>
                    <td>
                        {customer.customerLastName}
                    </td>
                    <td>
                        <a href=""> {customer.customerMobile}</a>
                       
                    </td>
                    <td>
                    <a href=""> {customer.customerEmail}</a>
                    </td>
                    <td>
                       True
                    </td>
                </tr>
                )}
                  </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Customer
