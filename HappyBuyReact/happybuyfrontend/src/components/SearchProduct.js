import React, { useState, useEffect  } from 'react'
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';  
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Image from './Image';
import {toast } from 'react-toastify';
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button,Container, Row, Col } from 'reactstrap';


const SearchProduct = ({match}) => {
const [products, setProducts] = useState([]);
const ProductName = {ProductName: match.params.searchItem.trim() }
let history = useHistory();
const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
console.log(match.params.searchItem)

  useEffect(() => {
    async function fetchData() {
      if(match.params.searchItem != '')
      {console.log(ProductName)
        const res = await axios.post('https://localhost:44376/api/GetProducts', ProductName ,{headers:headers})     
        .then(res =>{
          if(res.data.length != 0){
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


  function addToCart(productId){
    debugger
    const userInfo = sessionStorage.getItem('userInfo');
    if( userInfo != null)
    {
      const AddToCart ={CartCustomerId : sessionStorage.getItem('userId'),CartProductId: productId,CartQuantity: 1}
      console.log(productId)
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
            products.map(product =>
              <Col sm="3" className="blog" key={product.productId}>   
                <Card>          
                  <CardBody> 
                  <Link to={{pathname:"/view",state:{placeProduct : product}}}>            
                  <Image match={product.productId}/> 
                  </Link> 
                    <CardTitle>
                      <p className="title">{product.productName} </p>   
                                 
                    </CardTitle>
                  
                    <CardSubtitle>
                      <b className="price"> Price : &#x20b9;{product.productPrice}</b>
                    </CardSubtitle>
                                     
                    {product.productQuantity >5 ?
                    <div>
                      <strike>&#x20b9;{product.productPrice*2}</strike> 
                    <i> You save : &#x20b9;{product.productPrice}</i>
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
              </Card>
            </Col>
           )
        }
      </Row>
      </Container>          
       </div>   
    </div>
  );


}
export default SearchProduct;


