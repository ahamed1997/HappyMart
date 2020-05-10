import React, { useState, useEffect  } from 'react'
import Image from './Image';
import './ViewProduct.css'; 
import Rating from '@material-ui/lab/Rating';
import { Link ,useHistory} from 'react-router-dom';
import {toast } from 'react-toastify';
import {CardText, CardSubtitle, Button,Table} from 'reactstrap';
import { Typography,Row, Col } from 'antd';
import AuthService from './AuthService';

export default function ViewProduct({...match})  {
    const { Text } = Typography;

    let history = useHistory();
        const [product, setProducts] = useState(match.location.state.placeProduct);
        const [specification,setSpecification] = useState([]);
        useEffect(() => {
            const products = {SpecificationProductId: match.location.state.placeProduct.productId }
            AuthService.getSpecification(products)
            .then(json=>{
                setSpecification(json.data);
            }) 
           
        }, [])
    
        function handleAddtoCart(productId){
            const userInfo = sessionStorage.getItem('userInfo');
            if( userInfo != null)
            {
              const key ={CartCustomerId : sessionStorage.getItem('userId'),CartProductId: productId,CartQuantity: 1}
            AuthService.addToCart(key)           
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
        <Row >
            <Col flex={2} style={{  position: 'fixed', marginLeft: 50,width:480, height:1000, marginTop: 30}}>
            <div className="card">
                <div className="row no-gutters">
                    <Image match={product.productId}/>
                </div>
            </div>
            </Col>
            <Col flex={3} style={{   marginLeft: 500}}> 
            <div className="viewProduct">
                    <div>
                        <div className="card">
                            <div className="row no-gutters">
                                    <div className="col-md-12">
                                    <div className="card-body"> 
                                    <h5>{product.productName} </h5>
                                    <br/>
                                    {product.productQuantity <5 ? (
                                         <div>
                                         <h5 className="Offers">"OUT OF STACK"</h5>
                                       </div>
                                    ):(
                                        <div>
                                        <CardSubtitle>                 
                                                <h3 className="price"> Price : &#x20b9;{product.productPrice}</h3>
                                        </CardSubtitle>
                                        <Text delete>&#x20b9;{product.productPrice*2}</Text>&nbsp;&nbsp;
                                            <Text mark> You save : &#x20b9;{product.productPrice}</Text>
                                            <CardText>
                                                <i className="description">Brand : {product.productBrand}</i>
                                            </CardText>
                                            <CardText>
                                                <h6>Ratings : <Rating name="size-medium" defaultValue={product.productSpecification} /></h6>
                                            </CardText>
                                            <b>Product Description : </b>
                                            <p>{product.productDescription}</p>
                                            <Button className="btn btn-warning btn-rounded" type="button" onClick={handleAddtoCart.bind(this,product.productId)}><i className="fa fa-shopping-cart" ></i> ADD TO CART</Button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                        <Link to={{pathname:"/placeOrder",
                                                state:{
                                                placeProduct : product
                                                }}}
                                        className="btn btn-success btn-rounded">
                                        BUY NOW
                                        </Link>   
                                    </div>
                                    )}                                         
                                </div>                                                          
                            </div>                  
                        </div>               
                    </div>
                    <div className="card">
                        <div className="row no-gutters">
                            <div className="col-md-10">
                                <div className="card-body"> 
                                <h5>Product Specification: </h5> 
                                {specification.map(product =>
                                        <Table responsive key={product.specificationId}>
                                             <tbody>
                                            <tr>
                                            <th className="text-left">{product.specificationName}:</th>
                                            <td className="text-right">{product.specificationValue}</td>
                                            </tr>
                                    </tbody>
                                    </Table>
                                )}                           
                                </div>                                                        
                            </div>                  
                        </div>               
                    </div>
                </div>
            </div>
            </Col>
        </Row>
    </div>
    )
}

