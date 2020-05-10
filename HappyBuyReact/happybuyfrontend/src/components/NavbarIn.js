import React from 'react';
import 'antd/dist/antd.css';
import { Menu,Button } from 'antd';
import {  Redirect } from "react-router-dom";

import {CustomerServiceOutlined,EditOutlined,SearchOutlined,SettingOutlined,AppstoreAddOutlined,BarsOutlined,
  UserOutlined,ShoppingCartOutlined,ShoppingOutlined,LogoutOutlined} from '@ant-design/icons';
import { InputGroup } from 'reactstrap';
import { Link } from "react-router-dom";
import {  notification } from 'antd';
import { dark } from '@material-ui/core/styles/createPalette';
import './NavbarComponent.css'
import Suggestion from './Suggestion';
import CartIcon from './CartIcon';
const { SubMenu } = Menu;
const inputCss ={
  border: "0",
  outline:"0",
  background: "transparent",  
  borderBottom: "2px solid black",
  fontWeight:"bold",
  width:"350px"
}
class NavbarIn extends React.Component {
  constructor(props){  
    super(props)  
    this.state = {
      current: 'mail',
      collapsed: false,
      searchItem:"",
      size: 'large',

    };    
    this.fixSearchItem = this.fixSearchItem.bind(this);
}  


  fixSearchItem(e){
    e.preventDefault();
    this.setState({[e.target.name]:e.target.value});  
    
  }
  logOut() {
    sessionStorage.removeItem("userInfo");  
    sessionStorage.clear("userId");
    notification['success']({
      message: 'Logged out !',
      description:
        'Thanks for visiting HappyBuy',
    });  
    
  } 
  redirect(){
    return (    <Redirect to={{pathname:"/home"}}/> 
    )

  }
  render() {
    return (
      <div>
    <Menu className="navbar" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" >
      <Menu.Item key="mail">
        <Link className="navbar-brand" to={"/home"}><img className="logo" alt="" src={ require('../images/logo1.jpg') } /><b  style={{ color : dark}}><i>Happy Buy</i></b> </Link>
      </Menu.Item>
      <Menu.Item key="app" onSubmit={this.onFormSubmit}>
      <InputGroup>
      <Suggestion/>
        {/* <input style={inputCss} value={this.state.searchItem}  onChange={this.fixSearchItem} className="form-control"  name="searchItem" type="text" placeholder="Search" aria-label="Search" />
        <Button size="large" href={"/searchProduct/"+this.state.searchItem} disabled={this.state.searchItem.length > 0  ? false : true}  icon={<SearchOutlined />}>Search</Button> */}
    </InputGroup> 
      </Menu.Item>
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
         <BarsOutlined />   Search by Category
          </span>
        }>
        <Menu.ItemGroup title="Categories">
          <Menu.Item > <Link  to={"/searchProduct/"+"Appliances,Electronics"}>Appliances,Electronics</Link></Menu.Item>
          <Menu.Item key="setting:2"><Link  to={"/searchProduct/Men's Fashions"}>Men's Fashions</Link></Menu.Item>
          <Menu.Item key="setting:3"><Link   to={"/searchProduct/Women's Fashions"}>Women's Fashions</Link></Menu.Item>
          <Menu.Item key="setting:4"><Link  to={"/searchProduct/Books"}>Books</Link></Menu.Item>
          <Menu.Item key="setting:5"><Link   to={"/searchProduct/Home,Kitchen,Pets"}>Home,Kitchen,Pets</Link></Menu.Item>
          <Menu.Item key="setting:6"><Link   to={"/searchProduct/Sports,Fitness"}>Sports,Fitness</Link></Menu.Item>
          <Menu.Item key="setting:7"><Link   to={"/searchProduct/Mobiles,Computers"}>Mobiles,Computers</Link></Menu.Item>
          <Menu.Item key="setting:8"><Link  to={"/searchProduct/Toys,Baby Products"}>Toys,Baby Products</Link></Menu.Item>
          <Menu.Item key="setting:9"><Link   to={"/searchProduct/Gift Cards"}>Gift Cards</Link></Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu 
        title={
          <span className="submenu-title-wrapper">
        <AppstoreAddOutlined />   More
          </span>
        }compact
      >
        <Menu.ItemGroup>
          <Menu.Item key="setting:1"> <Link type="submit"  to={"/profile"}><UserOutlined />View Profile</Link></Menu.Item>
          <Menu.Item key="setting:2"><Link type="submit"  to={"/cart"}><ShoppingCartOutlined />Cart</Link></Menu.Item>
          <Menu.Item key="setting:3"><Link type="submit"  to={"/order"}><ShoppingOutlined />Orders</Link></Menu.Item>
          <Menu.Item key="setting:4"><Link type="submit"  to={"/home"}><CustomerServiceOutlined />24 x 7 Customer Service</Link></Menu.Item>
          <SubMenu 
        title={
          <span className="submenu-title-wrapper">
         <SettingOutlined />Settings
          </span>
        }compact
      >
        <Menu.ItemGroup>
          <Menu.Item key="setting:1"> <Link type="submit"  to={"/editProfile"}><EditOutlined />Edit Profile</Link></Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item className="links">
      {/* <ShoppingCartOutlined /> */}
        {/* <Link type="submit"  to={"/cart"}><b>Cart</b></Link> */}
        <Link type="submit"  to={"/cart"}><CartIcon/></Link>
         </Menu.Item>
        <Menu.Item className="links">
        <Link type="submit" onClick={this.logOut} to={"/happybuy"}><LogoutOutlined /><b>LogOut</b></Link>
      </Menu.Item>
    </Menu>

      </div>
      
    );
  }
}

export default NavbarIn

