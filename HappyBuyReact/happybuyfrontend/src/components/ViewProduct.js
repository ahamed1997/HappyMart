// import React, { useState, useEffect  } from 'react'
// import Image from './Image';
// import './ViewProduct.css'; 
// import Rating from '@material-ui/lab/Rating';
// import { Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
// import axios from 'axios';  
// import {toast } from 'react-toastify';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,Container, Row, Col } from 'reactstrap';
// import { Table } from 'reactstrap';

// export default function ViewProduct({...match}) {
//     let history = useHistory();
//     console.log(match)
//     const [product, setProducts] = useState(match.location.state.placeProduct);
//     const [spec, setSpecifications]=useState( [JSON.stringify(match.location.state.placeProduct.productSpecification)]);
//     const sampleJSON = JSON.stringify(match.location.state.placeProduct.productSpecification);
//     const [specification,setSpecification] = useState([]);
    
//     useEffect(() => {
//         const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
//         const products = {SpecificationProductId: match.location.state.placeProduct.productId }
//         const res = axios.post('https://localhost:44376/api/GetSpecification', products ,{headers:headers})     
//         .then(json=>{
//             console.log(json.data)
//             setSpecification(json.data);
//             console.log(specification)
//         }) 
       
//     }, [])

//     function handleAddtoCart(productId){
//         const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
//         const userInfo = sessionStorage.getItem('userInfo');
//         if( userInfo != null)
//         {
//           const AddToCart ={CartCustomerId : sessionStorage.getItem('userId'),CartProductId: productId,CartQuantity: 1}
//           axios.post('https://localhost:44376/api/AddToCart', AddToCart ,{headers:headers})     
//               .then(res =>{
//                  if(res.data < 6){
//                   toast.success('Added to Cart Successfully!',{position:toast.POSITION.TOP_CENTER, autoClose:2000})
//                  }
//                  else{
//                   toast.error('Sorry, You can add only 5 items in Cart at a time!',{position:toast.POSITION.TOP_CENTER, autoClose:false})
//                  }
//                 })  
//         }
//         else{
//           history.push('/login');
//         }
//       }
   
//     function  renderTableHeader() {
//         let header = Object.keys(product.productSpecification)
//         return header.map((key, index) => {
//            return <th key={index}>{key.toUpperCase()}</th>
//         })
//      }
//     return (
//         <div className="viewProduct">
//             <div>
//                 <div className="card">
//                     <div className="row no-gutters">
//                         <div className="col-md-4"><Link to={'/home'}><img className="logo" src={ require('../images/logo1.jpg') } /><b>Home</b></Link>
//                             <div className="imageView">
//                              <Image match={product.productId}/> 
//                             </div>                           
//                             </div>
//                             <div className="col-md-8">
//                             <div className="card-body">
//                                <h5>{product.productName} </h5>
//                                <br/>
//                                <CardSubtitle>                 
//                                     <h3 className="price"> Price : &#x20b9;{product.productPrice}</h3>
//                                 </CardSubtitle>
                 
//                                 <strike>&#x20b9;{product.productPrice*2}</strike> 
//                                  <i> You save : &#x20b9;{product.productPrice}</i>
//                                 <CardText>
//                                     <p className="description">Brand : {product.productBrand}</p> <Rating name="size-medium" defaultValue={product.productQuantity} />
//                                 </CardText>
//                                 <b>Product Description : </b>
//                                  <p>{product.productDescription}</p>
//                                 <Button className="btn btn-warning btn-rounded" type="button" onClick={handleAddtoCart.bind(this,product.productId)}><i className="fa fa-shopping-cart" ></i> ADD TO CART</Button>
//                                 &nbsp;&nbsp;&nbsp;&nbsp;
                            
//                                 <Link to={{pathname:"/placeOrder",
//                                         state:{
//                                         placeProduct : product
//                                         }}}
//                                 className="btn btn-success btn-rounded">
//                                 BUY NOW
//                                 </Link>                                                
//                             </div>                                                        
//                         </div>                  
//                     </div>               
//                 </div>
//                 <div className="card">
//                     <div className="row no-gutters">
//                         <div className="col-md-8">
//                             <div className="card-body"> 
//                             <h5>Product Specification: </h5> 
//                             {specification.map(product =>
//                                  <Table responsive key={product.specificationId}>
//                                      <tr>
//                                         <th className="text-left">{product.specificationName}:</th>
//                                         <td className="text-right">{product.specificationValue}</td>
//                                      </tr>
                               
//                                 <tbody>
                                  
//                                 </tbody>
//                              </Table>
//                             )}                           
//                             </div>                                                        
//                         </div>                  
//                     </div>               
//                 </div>
//             </div>
//         </div>

//     )
// }

import { Layout, Menu } from 'antd';
import React, { useState, useEffect  } from 'react'
import Image from './Image';
import './ViewProduct.css'; 
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import axios from 'axios';  
import {toast } from 'react-toastify';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,Container} from 'reactstrap';
import { Table } from 'reactstrap';

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {  Row, Col , Divider } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


export default function ViewProduct({...match})  {

    let history = useHistory();
        console.log(match)
        const [product, setProducts] = useState(match.location.state.placeProduct);
        const [spec, setSpecifications]=useState( [JSON.stringify(match.location.state.placeProduct.productSpecification)]);
        const sampleJSON = JSON.stringify(match.location.state.placeProduct.productSpecification);
        const [specification,setSpecification] = useState([]);
        
        useEffect(() => {
            const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
            const products = {SpecificationProductId: match.location.state.placeProduct.productId }
            const res = axios.post('https://localhost:44376/api/GetSpecification', products ,{headers:headers})     
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
                    <Image  match={product.productId}/> 
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
                                     <h3 className="price"> Price : &#x20b9;{product.productPrice}</h3>
                                 </CardSubtitle>
                 
                                 <strike>&#x20b9;{product.productPrice*2}</strike> 
                                  <i> You save : &#x20b9;{product.productPrice}</i>
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
    





   {/*    <Layout>
        <Sider style={{  position: 'fixed', width:992, marginLeft: 60,marginTop: 60}}>
       <div />
            <Menu >
            <div >
                     <div >
                             <div >
                             <div >
                           <Image  match={product.productId}/> 
                        </div>
                    </div>
                </div>
            </div>
     </Menu>
   </Sider> 
    <Layout className="site-layout" style={{ marginLeft: 400 }}>
      <Content style={{ margin: '14px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background">
         
        <div className="viewProduct">
             <div>
                 <div className="card">
                     <div className="row no-gutters">
                             <div className="col-md-10">
                             <div className="card-body">
                                <h5>{product.productName} </h5>
                                <br/>
                                <CardSubtitle>                 
                                     <h3 className="price"> Price : &#x20b9;{product.productPrice}</h3>
                                 </CardSubtitle>
                 
                                 <strike>&#x20b9;{product.productPrice*2}</strike> 
                                  <i> You save : &#x20b9;{product.productPrice}</i>
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
                        <div className="col-md-8">
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



        </div>
      </Content>
     
    </Layout>
  </Layout> */}



        </div>
    )
}

