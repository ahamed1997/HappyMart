import React, { Component } from 'react'
import axios from 'axios';  
import './Home.css'; 
import Rating from '@material-ui/lab/Rating';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Container, Row, Col 
} from 'reactstrap';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
export default class Home extends Component {
 
  constructor(props){
    super(props);
    this.state = {
        products:[]
    }
        
}
componentDidMount() {
  const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
  axios.post('https://localhost:44376/api/GetAllProducts',{
  headers:headers
}).then(json=>{
  if( json.status === 200){  
    const products = json.data;
    console.log(json.data)
    this.setState({ products: products });
  }
  else 
  {
    alert('No Products Found');
  }
})
}

  render() {
    const {
      products
   } = this.state;

   let productList = this.state.products.map(product=>{
     return (
       <Col sm="3" className="blog">       
            <Card>          
              <CardBody>
                <CardImg top width="100%" src={ require('../images/logo1.jpg')} />                                     
                <CardTitle>
                  <p className="title">{product.productName} </p>                
                </CardTitle>
                <CardSubtitle>
                    <h2 className="Offers">"FLAT 50 %"</h2>
                </CardSubtitle>
                <CardSubtitle>
                    <b className="price"> Price : &#x20b9;{product.productPrice}</b>
                </CardSubtitle>
                <strike>&#x20b9;{product.productPrice*2}</strike> 
                <i> You save : &#x20b9;{product.productPrice}</i>
                <CardText>
                      <p className="description">Brand : {product.productBrand}</p><Rating name="size-medium" defaultValue={product.productQuantity} />
                </CardText>
                
                <Button className="btn btn-warning"><i className="fa fa-shopping-cart" ></i> Add to Cart</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button className="btn btn-success">
                  Buy
                </Button>               
              </CardBody>                
            </Card>
                                 
       </Col>
     )
   })
    return (
      <div className="frame">
          <Container fluid>
          <Row>
              {productList}
          </Row>
        </Container> 
      </div>      
    )
  }
}

