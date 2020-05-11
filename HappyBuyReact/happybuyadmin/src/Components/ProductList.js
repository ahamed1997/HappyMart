import React ,{useState,useEffect} from 'react'
import AuthService from './AuthService';
import { Row, Col} from 'antd';
import { Table } from 'reactstrap';
import UpdateProduct from './UpdateProduct';


function ProductList() {
    const [products, setProducts] = useState([]);
    const [editProducts, setEditProducts] = useState("");
    const [enable, setEnable] = useState(false);
    const [SubCategory, setSubCategory]=useState([]);
    useEffect(() => {
       AuthService.getAllProducts()
       .then(result=>{
           setProducts(result.data);
       })
       AuthService.getSubCategories()
       .then(result=>{
        setSubCategory({SubCategory:result.data})
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
    return (
        <div>
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
                    
                        {products.map(product=>
                            <tr style={inlineStyle} onClick={editProduct.bind(this,product)}>
                                <td >{product.productId}</td>
                                <td>{product.productName}</td>
                            </tr>

                        )}
                    
                </tbody>
                </Table>
                </Col>
            {/* {enable ? 
            (*/}
                <Col span={14}> 
                <UpdateProduct product={editProducts} subCategory={SubCategory}/>
                </Col>
            {/*)
             :
            (
                <div>
                    <h3>Edit Products</h3>
                </div>
            )    */}
            }
                
            </Row>
        </div>
    )
}

export default ProductList
