import React,{useState} from 'react'
import { Menu } from 'antd';
import { UpOutlined, DownOutlined ,DollarOutlined} from '@ant-design/icons';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
export default function TopFilter({topFilter,...product}) {
    console.log(product.product)
    const [current, setcurrent] = useState('mail')
    const [products,setProducts]=useState(product.product);
    const [asecProducts,setAProducts]=useState(product.product);
    const [descProducts,setDProducts]=useState(product.product);
    const [sortBy,setSortType]=useState(0);

    // asecProducts.sort(function(a,b){
    //   return a.productPrice - b.productPrice;
    // })

    // console.log("ASEC"+asecProducts)
    // descProducts.sort(function(a,b){
    //   return b.productPrice - a.productPrice;
    // })
    // console.log("DSEC"+descProducts)


    function sortProductByAsec(e)
    {
      //   console.log("object")
      // setSortType(e.target.value)
      // console.log(e.target.value)
      // if(e.target.value === 1){
      //   products.sort(function(a,b){
      //     return a.productPrice - b.productPrice;
      //   })
      //   console.log(products) 
      // }
      // else if(e.target.value === 2)
      // {
      //   products.sort(function(a,b){
      //     return b.productPrice - a.productPrice;
      //   })
      //   console.log(products) 
      // }
      products.sort(function(a,b){
            return a.productPrice - b.productPrice;
          })
          console.log(products) 

    } 
    function sortProductByDesc(e)
    {
        
      // if(e.target.value === 1){
      //   products.sort(function(a,b){
      //     return a.productPrice - b.productPrice;
      //   })
      //   console.log(products) 
      // }
      // else if(e.target.value === 2)
      // {
      //   products.sort(function(a,b){
      //     return b.productPrice - a.productPrice;
      //   })
      //   console.log(products) 
      // }
      products.sort(function(a,b){
            return b.productPrice - a.productPrice;
          })
          console.log(products) 
    }   
    
    function sortByPopular(e)
    {
      products.sort(function(a,b){
        return b.productSpecification - a.productSpecification;
      })
      console.log(products) 
    }
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink disabled><b>Sort by</b></NavLink>
                </NavItem>
                <NavItem>
                <NavLink > <Link onTouchMove={()=>topFilter(products)} onClick={sortByPopular} value={0}>Popularity </Link> <DollarOutlined /></NavLink>
                </NavItem>
                <NavItem>
                <NavLink ><Link onTouchMove={()=>topFilter(products)} onClick={sortProductByAsec} value={1}>Low - High </Link> <UpOutlined /></NavLink>
                </NavItem>
                <NavItem>
                <NavLink> <Link onTouchMove={()=>topFilter(products)} onClick={sortProductByDesc} value={2}>High to Low </Link> <DownOutlined /></NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}
