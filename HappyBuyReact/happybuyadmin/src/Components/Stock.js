import React ,{useState,useEffect} from 'react'
import AuthService from './AuthService';
import { Badge} from 'antd';
import { Table,InputGroup } from 'reactstrap';
import {FastBackwardOutlined,StepForwardOutlined,StepBackwardOutlined,FastForwardOutlined} from '@ant-design/icons';


function Stock() {
const[stocks, setstocks]=useState([]);
const [currentPage,setCurrentPage]= useState(1);
const [productPerPage, setproductPerPage] = useState(6);

    useEffect(() => {
        AuthService.getStock()
        .then(result=>{
            setstocks(result.data);
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
        if(currentPage < Math.ceil(stocks.length/productPerPage)){
          setCurrentPage(currentPage + 1)
        }
      }
      function lastPage(){
        if(currentPage < Math.ceil(stocks.length/productPerPage)){
          setCurrentPage(Math.ceil(stocks.length/productPerPage))
        }
        
      }
     const indexOfLastProduct = currentPage * productPerPage;
     const indexOfFirstProduct= indexOfLastProduct - productPerPage;
     const currentProducts = stocks.slice(indexOfFirstProduct,indexOfLastProduct);
     const totalPages = Math.ceil(stocks.length/productPerPage);
     const pageNumberCss ={
       width:"45px",
       border:"1px solid #17A2B8",
       color:"#17A2B8",
       textAlign:"center",
       fontWeight:"bold"
     }
    return (
        <React.Fragment>
             <Table responsive   bordered>
                <thead>
                    <tr>
                        <th>STOCK ID</th>
                        <th>PRODUCT ID</th>
                        <th>NAME</th>
                        <th>QUANTITY</th>
                        <th>ACTIVE STATE</th>
                        <th>VENDOR</th>
                    </tr>
                </thead>
                <tbody >
                    {currentProducts.map(stock=>
                        <tr key={stock.stockId}>
                            <td>{stock.stockId}</td>
                            <td>{stock.productId}</td>
                            <td>{stock.productName}</td>
                            <td>{stock.stockQuantity}</td>
                            <td> {stock.productIsActive === true  ? <Badge status="success" text="Yes" />
                                : 
                                (<Badge status="error" text="No" />)}
                            </td>
                            <td>{stock.vendorsName}</td>
                        </tr>)}
                </tbody>
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
        </React.Fragment>
    )
}

export default Stock


