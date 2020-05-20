import React ,{useState,useEffect} from 'react'
import AuthService from './AuthService';
import { Table,InputGroup } from 'reactstrap';
import {FastBackwardOutlined,StepForwardOutlined,StepBackwardOutlined,FastForwardOutlined} from '@ant-design/icons';
import Graph from './Graph';
import dateFormat from 'dateformat';
import SalesByProduct from './SalesByProduct';
const styles = {
    
        counterIncrement: "Serial", 
        content:  "counter(Serial)",
      
}
function Sales() {

const[sales, setSales]=useState([]);
const [currentPage,setCurrentPage]= useState(1);
const [productPerPage, setproductPerPage] = useState(6);

    useEffect(() => {
        AuthService.getSales()
        .then(result=>{
            setSales(result.data);
        })
        .catch((error) => {
          AuthService.errorHandling(error)
      })
    
     }, [])

     function firstPage(){
        if(currentPage>1){
          setCurrentPage(1)
        }
      }
      function prevPage(){
        if(currentPage>1){
          setCurrentPage(currentPage-1)
        }
      }
      function nextPage(){
        if(currentPage < Math.ceil(sales.length/productPerPage)){
          setCurrentPage(currentPage + 1)
        }
      }
      function lastPage(){
        if(currentPage < Math.ceil(sales.length/productPerPage)){
          setCurrentPage(Math.ceil(sales.length/productPerPage))
        }
        
      }
     const indexOfLastProduct = currentPage * productPerPage;
     const indexOfFirstProduct= indexOfLastProduct - productPerPage;
     const currentProducts = sales.slice(indexOfFirstProduct,indexOfLastProduct);
     const totalPages = Math.ceil(sales.length/productPerPage);
     const pageNumberCss ={
       width:"45px",
       border:"1px solid #17A2B8",
       color:"#17A2B8",
       textAlign:"center",
       fontWeight:"bold"
     }
    return (
        <div>
            
             <Table responsive  bordered className="auto-index">
                <thead>
                    <tr>
                        <th>SALE ID</th>
                        <th>Total Quantity</th>
                        <th>Total Profit</th>
                        <th>Date of Sale</th>
                    </tr>
                </thead>
               
                    {currentProducts.map(sale=>
                     <tbody >
                        <tr key={sale.orderDetailsId}>
                             <td></td>
                             <td>{sale.orderDetailsQuantity}</td>
                            <td> &#x20b9;{sale.orderDetailsPrice}.00</td>
                            <td>{dateFormat(sale.paymentDetailsDateOfPayment, "dS mmmm yyyy")}</td>
                        </tr>
                        </tbody>
                        )}
               
                <tfoot >
                    <tr>
                        <td colspan="3">
                        <div style={{"float":"left"}}>
                            <b>Showing Results : {currentPage} of {totalPages}</b>
                         </div>
                         </td>
                         <td colspan="3">   
                            <div className="text-center" style={{"float":"right", "justify":"center"}}>
                                        <InputGroup size="sm">
                                        <div style={{"float":"left"}}>
                                        <button className="btn btn-outline-dark" disabled={currentPage === 1? true:false} onClick={firstPage}>
                                        <FastBackwardOutlined />
                                        </button >
                                        <button className="btn btn-outline-dark" disabled={currentPage === 1? true:false} onClick={prevPage}>
                                        <StepBackwardOutlined />
                                        </button>
                                        </div>
                                        <input className="bg-dark" style={pageNumberCss} name ="currentPage" value ={currentPage} disabled />
                                        <div style={{"float":"right"}}>
                                        <button  className="btn btn-outline-dark" disabled={currentPage === totalPages ? true:false} onClick={nextPage}>
                                        <StepForwardOutlined />
                                        </button> 
                                        <button className="btn btn-outline-dark" disabled={currentPage === totalPages ? true:false} onClick={lastPage}>
                                        <FastForwardOutlined />
                                        </button>
                                        </div>
                                        </InputGroup>
                            </div>
                        </td>
                    </tr>
                
                </tfoot>
            </Table>
        </div>
    )
}

export default Sales

