
import React, { useState, useEffect  } from 'react'
import axios from 'axios';  
import {message} from 'antd';
import {FastBackwardOutlined,StepForwardOutlined,StepBackwardOutlined,FastForwardOutlined} from '@ant-design/icons';
import './Home.css';
import { useHistory } from "react-router-dom";
import Image from './Image';
import {  FormControl } from '@material-ui/core';
import { CardBody,  CardTitle,Button, CardSubtitle,Container,InputGroup, Row, Col, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Tooltip ,Spin} from 'antd';
import Filter from './Filter';
import AuthService from './AuthService';


export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage,setCurrentPage]= useState(1);
  const [productPerPage, setproductPerPage] = useState(12);
  const [test,setTest]=useState([]);
  const [filteredProducts,setFileteredProducts]=useState([]);
  const key = 'updatable';
  let history = useHistory();
    useEffect(() => {
      async function fetchData() {
        const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
    //   axios.post('https://localhost:44376/api/GetAllProducts',{
    //   headers:headers
    // })
    AuthService.getAllProducts()    
    .then(json=>{
      if( json.status === 200){  
        const products = json.data;
        console.log(json.data)
        setProducts(json.data)
        setFileteredProducts(json.data)
        for(let i=0;i<products.length;i++)
        {
          setTest([
            ...test,products[i]
          ])
        }
      }
      else 
      {
        alert('No Products Found');
      }
    })
          
      }
      fetchData();
    },[]);

 
  function handleAddtoCart(productId){
    const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
    const userInfo = sessionStorage.getItem('userInfo');
    if( userInfo != null)
    {
      const AddToCart ={CartCustomerId : sessionStorage.getItem('userId'),CartProductId: productId,CartQuantity: 1}
      console.log(productId)
      axios.post('https://localhost:44376/api/AddToCart', AddToCart ,{headers:headers})     
          .then(res =>{console.log(res.data)
             if(res.data < 6){
                message.loading({ content: 'Loading...', key });
              setTimeout(() => {
                message.success({ content: ' Added to Cart Successfully!', key, duration: 2 });
              }, 1000);
                        }
             else{
              message.error('Sorry, You can add only 5 items in Cart at a time!');

             }
            })  
    }
    else{
      history.push('/login');
    }
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
    if(currentPage < Math.ceil(filteredProducts.length/productPerPage)){
      setCurrentPage(currentPage + 1)
    }
  }
  function lastPage(){
    if(currentPage < Math.ceil(filteredProducts.length/productPerPage)){
      setCurrentPage(Math.ceil(filteredProducts.length/productPerPage))
    }
    
  }

  
  const filter = (prod)=>{console.log(prod); setFileteredProducts(prod)}
  console.log(filteredProducts)
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct= indexOfLastProduct - productPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct,indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length/productPerPage);
  const pageNumberCss ={
    width:"45px",
    border:"1px solid #17A2B8",
    color:"#17A2B8",
    textAlign:"center",
    fontWeight:"bold"
  }
  return (
    <div> 
      {filteredProducts.length > 0 ?
        <Filter  filter={filter}  product={products}/> :<div></div>      
      } 
      {products.length === 0 ? (<div className="text-center" style={{"float":"center"}}><Spin size="large" /></div> ):(
       <div className="frame"> 
            <div className="text-center">    
           

              </div>

            <Container fluid style={{ marginTop: 30}}>
               <Row >     
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
                    {product.productQuantity >5 ?(
                    <div>
                    <Button className="btn btn-warning " value={product.productId} onClick={handleAddtoCart.bind(this,product.productId)} type="button"><i className="fa fa-shopping-cart" ></i> ADD TO CART</Button>
                      &nbsp;&nbsp;&nbsp;
                      
                    <Link to={{pathname:"/placeOrder",state:{placeProduct : product}}}className="btn btn-success btn-rounded">BUY NOW</Link>            
                    </div>
                      ):(
                        <div>
                          <h5 className="Offers">"OUT OF STACK"</h5>
                        </div>
                      )
                    }
                </CardBody>
             </Col> 
              )}
            </Row>
        </Container>
            <CardFooter>
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
            </CardFooter>
    </div> 
      )} 
 </div>
);

}
