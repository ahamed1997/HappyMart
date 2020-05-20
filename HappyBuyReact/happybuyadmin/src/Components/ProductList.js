import React ,{useState,useEffect} from 'react'
import AuthService from './AuthService';
import { Row, Col} from 'antd';
import { Table,InputGroup } from 'reactstrap';
import UpdateProduct from './UpdateProduct';
import {FastBackwardOutlined,StepForwardOutlined,StepBackwardOutlined,FastForwardOutlined} from '@ant-design/icons';


function ProductList() {
    const [products, setProducts] = useState([]);
    const [editProducts, setEditProducts] = useState("");
    const [enable, setEnable] = useState(false);
    const [SubCategory, setSubCategory]=useState([]);
    const [currentPage,setCurrentPage]= useState(1);
    const [productPerPage, setproductPerPage] = useState(12);
    useEffect(() => {
       AuthService.getAllProducts()
       .then(result=>{
           setProducts(result.data);
       }).catch((error) => {
        console.log('error: '+error);
    })
       AuthService.getSubCategories()
       .then(result=>{
        setSubCategory({SubCategory:result.data})
       }).catch((error) => {
        console.log('error: '+error);
    }).catch((error) => {
      AuthService.errorHandling(error)
  })
    }, [])
    const inlineStyle={
        cursor: "pointer",
        alignItems: 'center',
    }
    function editProduct(product)
    {
        console.log(product)
        setEditProducts(product);
        setEnable(true);
    }

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
        if(currentPage < Math.ceil(products.length/productPerPage)){
          setCurrentPage(currentPage + 1)
        }
      }
      function lastPage(){
        if(currentPage < Math.ceil(products.length/productPerPage)){
          setCurrentPage(Math.ceil(products.length/productPerPage))
        }
        
      }

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct= indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct);
  const totalPages = Math.ceil(products.length/productPerPage);
  const pageNumberCss ={
    width:"45px",
    border:"1px solid #17A2B8",
    color:"#17A2B8",
    textAlign:"center",
    fontWeight:"bold"
  }
      
    return (
        <React.Fragment>
            <Row>
                <Col span={10}>
                <Table responsive   bordered>
                <thead>
                    <tr >
                        <th > Id</th>
                        <th>Name </th>
                    </tr>
                </thead>
                <tbody>
                    
                        {currentProducts.map(product=>
                            <tr style={inlineStyle} onClick={editProduct.bind(this,product)}>
                                <td >{product.productId}</td>
                                <td>{product.productName}</td>
                            </tr>

                        )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2">
                        <div style={{"float":"left"}}>
                      <b>Showing Results : {currentPage} of {totalPages}</b>
                </div>
                <div style={{"float":"right"}}>
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
                </Col>
                <Col span={14}> 
                <UpdateProduct product={editProducts} subCategory={SubCategory}/>
                </Col>                
            </Row>
        </React.Fragment>
    )
}

export default ProductList
