
import React, { useState, useEffect  } from 'react'
import Image from './Image';
import './ViewProduct.css'; 
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import axios from 'axios';  
import {toast } from 'react-toastify';
import {CardText, CardSubtitle, Button} from 'reactstrap';
import { Table } from 'reactstrap';
import { Typography,InputNumber } from 'antd';
import {  Row, Col  } from 'antd';

export default function ViewProduct({...match})  {
    const { Text } = Typography;

    let history = useHistory();
        const [product, setProducts] = useState(match.location.state.placeProduct);
        const [specification,setSpecification] = useState([]);
        useEffect(() => {
            const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
            const products = {SpecificationProductId: match.location.state.placeProduct.productId }
            axios.post('https://localhost:44376/api/GetSpecification', products ,{headers:headers})     
            .then(json=>{
                console.log(json.data)
                setSpecification(json.data);
                console.log(specification)
            }) 
           
        }, [])
    
        function handleAddtoCart(productId){
            const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
            const userInfo = sessionStorage.getItem('userInfo');
            if( userInfo != null)
            {
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
        <Row >
            <Col flex={2} style={{  position: 'fixed', marginLeft: 50,width:480, height:1000, marginTop: 30}}>
            <div className="card">
                <div className="row no-gutters">
                    <div>
                        <div >
                        <Image match={product.productId}/>
                        </div>
                    </div>
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
                                    <CardSubtitle>                 
                                            <h3 className="price" formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}> Price : &#x20b9;{product.productPrice}</h3>
                                    </CardSubtitle>
                                    <Text delete>&#x20b9;{product.productPrice*2}</Text>&nbsp;&nbsp;
                                        <Text mark> You save : &#x20b9;{product.productPrice}</Text>
                                        <CardText>
                                            <p className="description">Brand : {product.productBrand}</p> <Rating name="size-medium" defaultValue={product.productQuantity} />
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
                                            <tr>
                                            <th className="text-left">{product.specificationName}:</th>
                                            <td className="text-right">{product.specificationValue}</td>
                                            </tr>
                                    
                                    <tbody>
                                        
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

