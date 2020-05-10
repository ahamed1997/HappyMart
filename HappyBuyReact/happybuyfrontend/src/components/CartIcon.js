import React, {useEffect,useState}from 'react'
import { Badge } from 'antd';
import AuthService from './AuthService';
import {Avatar} from 'antd';
import {ShoppingCartOutlined} from  '@ant-design/icons';
function CartIcon() {
const [products, setProducts] = useState();
const [cartCount, setcartCount] = useState(0);

    useEffect(() => {
        async function fetchData() {
        const CartCustomerId = {CartCustomerId: sessionStorage.getItem('userId') }
          AuthService.getCartItems(CartCustomerId)  
            .then(res =>{
               if(res.data.length !== 0)
               {
                   let count =0;
                   for(let i=0; i<res.data.length ; i++)
                   {
                        count = Math.ceil(count + res.data[i].cartQuantity)
                   }
                    setProducts(res.data)
                    setcartCount(count);
               } 
               else
               {
                setcartCount(0);
            }
            })  
              
        }
        fetchData();
      });
    return (
        <div>
            <Badge count={cartCount}>
                <Avatar style={{ borderBlockColor:'black',verticalAlign: 'middle' }} shape="square" size={30} icon={<ShoppingCartOutlined />}>
                </Avatar>
            </Badge>
        </div>
    )
}

export default CartIcon
