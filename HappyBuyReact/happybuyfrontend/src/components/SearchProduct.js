import React, { useState, useEffect  } from 'react'
import axios from 'axios';  
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Image from './Image';
import AuthService from './AuthService';
import {toast } from 'react-toastify';
import {FastBackwardOutlined,StepForwardOutlined,StepBackwardOutlined,FastForwardOutlined} from '@ant-design/icons';
import { CardBody,CardTitle, CardSubtitle, Button,Container, Row, Col,CardFooter,InputGroup } from 'reactstrap';
import { Tooltip } from 'antd';

const SearchProduct = ({match}) => {
  
const [products, setProducts] = useState([]);
const key = {ProductName: match.params.searchItem}
const [currentPage,setCurrentPage]= useState(1);
const [productPerPage] = useState(12);
let history = useHistory();
  useEffect(() => {
    const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
    async function fetchData() {
      if(match.params.searchItem !== '')
      {
        // await axios.post('https://localhost:44376/api/GetProducts', ProductName ,{headers:headers}) 
        AuthService.getProducts(key)    
        .then(res =>{
          if(res.data.length !== 0){
            setProducts(res.data)
        }
        else{
            history.push('/emptySearch');
        }
        })    
      }
      else{
        history.push('/emptySearch');
      }
        
    }
    fetchData();
  });
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
  function addToCart(productId){
    
    const userInfo = sessionStorage.getItem('userInfo');
    if( userInfo != null)
    {const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
      const AddToCart ={CartCustomerId : sessionStorage.getItem('userId'),CartProductId: productId,CartQuantity: 1}
      axios.post('https://localhost:44376/api/AddToCart', AddToCart ,{headers:headers})     
          .then(res =>{
             if(res.data < 6){
              toast.success('Added to Cart Successfully!',{position:toast.POSITION.TOP_CENTER, autoClose:2000})
             }
             else{
              toast.error('Sorry, You can add only 5 items in Cart at a time!',{position:toast.POSITION.TOP_CENTER, autoClose:false})
             }
            })  
    }
    else{
      history.push('/login');
    }
  }
  return (
    <div>
       <div className="frame">  
        <Container fluid>
          <Row>
          {
          currentProducts.map(product =>
              <Col sm="3" className="blog" key={product.productId}>  
                  <CardBody> 
                      <Tooltip placement="bottom" title={product.productName}>
                        <Link to={{pathname:"/view",state:{placeProduct : product}}}>            
                          <Image match={product.productId}/> 
                        </Link> 
                    </Tooltip>  
                      <CardTitle>
                        <p className="title">{product.productName} </p>   
                      </CardTitle>
                      <CardSubtitle>
                        <b className="price"> Price : &#x20b9;{product.productPrice}</b>
                      </CardSubtitle>
                    {product.productQuantity >5 ?
                    <div>
                    <Button className="btn btn-warning btn-rounded" value={product.productId} onClick={addToCart.bind(this,product.productId)} type="button"><i className="fa fa-shopping-cart" ></i> ADD TO CART</Button>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={{pathname:"/placeOrder",state:{placeProduct : product}}}className="btn btn-success btn-rounded">BUY NOW</Link>            
                    </div>
                      :(
                        <div>
                          <CardSubtitle>
                          <br/>
                              <h2 className="Offers">"OUT OF STACK"</h2>
                          </CardSubtitle>
                        </div>
                      )
                    }        
                </CardBody>
            </Col>
           )
        }
      </Row>
      </Container>   
      <CardFooter>
          <div style={{"float":"left"}}>
                  <b>Search Results : {currentPage} of {totalPages}</b>
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
        </CardFooter>       
       </div>   
    </div>
  );


}
export default SearchProduct;


