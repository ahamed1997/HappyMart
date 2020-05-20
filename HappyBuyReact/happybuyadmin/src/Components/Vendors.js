import React ,{useState,useEffect} from 'react'
import AuthService from './AuthService';
import { Table } from 'reactstrap';


function Vendors() {
const[vendors, setVendors]=useState([]);

    useEffect(() => {
        AuthService.getAllVendors()
        .then(result=>{
            console.log(result.data)
            setVendors(result.data);
        }).catch((error) => {
            AuthService.errorHandling(error)
        })
      
     }, [])
    return (
        <React.Fragment>
             <Table responsive   bordered>
                <thead>
                    <tr >
                        <th > Id</th>
                        <th>Name </th>
                        <th>TIN NO </th>
                        <th>Mobile </th>
                        <th>Email </th>
                        <th>Address </th>
                    </tr>
                </thead>
                <tbody>
                        {vendors.map(vendor=>
                            <tr >
                                <td >{vendor.vendorsId}</td>
                                <td>{vendor.vendorsName}</td>
                                <td>{vendor.vendorsTIN}</td>
                                <td><a href="">{vendor.vendorsMobile}</a></td>
                                <td><a href="">{vendor.vendorsEmail}</a></td>
                                <td>{vendor.vendorsAddress}</td>
                            </tr>
                        )}
                </tbody>
            </Table>
        </React.Fragment>
    )
}

export default Vendors
