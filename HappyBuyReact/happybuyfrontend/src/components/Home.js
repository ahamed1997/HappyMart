// import React, { Component } from 'react'
// import axios from 'axios';  
// import './Home.css';
// import {toast } from 'react-toastify';
// import Rating from '@material-ui/lab/Rating';
// import Image from './Image';
// import { Tooltip } from '@material-ui/core';

// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button,Container, Row, Col 
// } from 'reactstrap';

// import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
// import { Link } from 'react-router-dom';

// export default class Home extends Component {
//   state = {loading: true}
//   constructor({props}){
//      console.log(props)
//     super(props);
//     this.state = {
//         products:[]
//     }
        
// }
// componentDidMount() {
//   const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
//   axios.post('https://localhost:44376/api/GetAllProducts',{
//   headers:headers
// }).then(json=>{
//   if( json.status === 200){  
//     const products = json.data;
//     console.log(json.data)
//     this.setState({ products: products });
//   }
//   else 
//   {
//     alert('No Products Found');
//   }
// })
// }
// placeOrder(product){
//   console.log(product.productBrand)
//   const test = {ProductName : product.productName, ProductId : product.productId};
//   console.log(test)
//   this.props.history.push("/placeOrder/"+test);
//   console.log(product)
// }
// handleAddtoCart(productId){
//   const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
//   const userInfo = sessionStorage.getItem('userInfo');
//   if( userInfo != null)
//   {
//     const AddToCart ={CartCustomerId : sessionStorage.getItem('userId'),CartProductId: productId,CartQuantity: 1}
//     console.log(productId)
//     axios.post('https://localhost:44376/api/AddToCart', AddToCart ,{headers:headers})     
//         .then(res =>{
//            if(res.data < 6){
//             toast.success('Added to Cart Successfully!',{position:toast.POSITION.TOP_CENTER, autoClose:2000})
//            }
//            else{
//             toast.error('Sorry, You can add only 5 items in Cart at a time!',{position:toast.POSITION.TOP_CENTER, autoClose:false})
//            }
//           })  
//   }
//   else{
//     this.history.push('/login');
//   }
// }
//   render() {
//     const {
//       products
//    } = this.state;
//    let productList = this.state.products.map(product=>{
    
//      return (
//        <Col sm="3" className="blog">       
//             <Card>          
//               <CardBody>
//               <Tooltip title={product.productName} placement="bottom-start">
//                 <Image match={product.productId}/> 
//                 </Tooltip>                           
//                 <CardTitle>
//                   <p className="title">{product.productName} </p>  
                           
//                 </CardTitle>
//                 <CardSubtitle>
//                     <h2 className="Offers">"FLAT 50 %"</h2>
//                 </CardSubtitle>
//                 <CardSubtitle>
//                     <b className="price"> Price : &#x20b9;{product.productPrice}</b>
//                 </CardSubtitle>
//                 <strike>&#x20b9;{product.productPrice*2}</strike> 
//                 <i> You save : &#x20b9;{product.productPrice}</i>
//                 <CardText>
//                       <p className="description">Brand : {product.productBrand}</p><Rating name="size-medium" defaultValue={product.productQuantity} />
//                 </CardText>
//                 <b>{
//                 product.productSpecification.Series}</b>
//                 <Button className="btn btn-warning btn-rounded" type="button" onClick={this.handleAddtoCart.bind(this,product.productId)}><i className="fa fa-shopping-cart" ></i> ADD TO CART</Button>
//                 &nbsp;&nbsp;&nbsp;&nbsp;
                
//                 <Link to={{pathname:"/placeOrder",
//                         state:{
//                           placeProduct : product
//                         }}}
//                   className="btn btn-success btn-rounded">
//                  BUY NOW
//                 </Link>               
//               </CardBody>                
//             </Card>                                 
//        </Col>
//      )
//    })
//     return (
//       <div className="frame">
//           <Container fluid>
//           <Row>
//               {productList}
//           </Row>
//         </Container> 
//       </div>      
//     )
//   }
// }

////BACK UP-----------------------------------------------------------------------------------------------------------


import React, { useState, useEffect  } from 'react'
import axios from 'axios';  
import './Home.css';
import { useHistory } from "react-router-dom";
import {toast } from 'react-toastify';
import Rating from '@material-ui/lab/Rating';
import Image from './Image';
import { Tooltip } from '@material-ui/core';
import {  Card, CardImg, CardText, CardBody,  CardTitle, CardSubtitle, Button,Container, Row, Col } from 'reactstrap';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage,setCurrentPage]= useState(1);
  const [productPerPage, setproductPerPage] = useState(4);
  const [test,setTest]=useState([]);
  let history = useHistory();
    useEffect(() => {
      async function fetchData() {
        const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
      axios.post('https://localhost:44376/api/GetAllProducts',{
      headers:headers
    }).then(json=>{
      if( json.status === 200){  
        const products = json.data;
        console.log(json.data)
        setProducts(json.data)
        for(let i=0;i<products.length;i++)
        {
          console.log(test[i]);
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

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct);
  const paginate = (pageNumber)=> setCurrentPage(pageNumber);
  return (
    <div> 

       <div className="frame">  
        <div className="Pagination"> 
            <Pagination productsPerPage={productPerPage} totalProducts={products.length} paginate={paginate}/>
          </div>
            <Container fluid style={{ marginTop: 30}}>
               <Row >     
              {
             currentProducts.map(product =>
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
                      
                    <Button className="btn btn-warning " value={product.productId} onClick={handleAddtoCart.bind(this,product.productId)} type="button"><i className="fa fa-shopping-cart" ></i> ADD TO CART</Button>
                      &nbsp;&nbsp;&nbsp;
                    <Link to={{pathname:"/placeOrder",state:{placeProduct : product}}}className="btn btn-success btn-rounded">BUY NOW</Link>            
                    </div>
                      :(
                        <div>
                         
                       
                                    <h5 className="Offers">"OUT OF STACK"</h5>
                          
                        </div>
                      )
                    }
                    
                </CardBody>
              </Card>
             </Col> 
              )}
            </Row>
        </Container>
    </div>  
 </div>
);

}
