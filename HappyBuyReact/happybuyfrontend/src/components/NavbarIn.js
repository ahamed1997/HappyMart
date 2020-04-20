import React from 'react';
import 'antd/dist/antd.css';
import { Menu,Input,Button } from 'antd';

import {toast } from 'react-toastify';

import {
  MenuUnfoldOutlined,CustomerServiceOutlined,
  MenuFoldOutlined,DownOutlined,EditOutlined,
  PieChartOutlined,SearchOutlined,SettingOutlined,AppstoreAddOutlined,BarsOutlined,
  DesktopOutlined,BookOutlined,PoweroffOutlined,
  CheckCircleOutlined,UserSwitchOutlined,UserOutlined,ShoppingCartOutlined,ShoppingOutlined,
  ContainerOutlined,UsergroupAddOutlined,LogoutOutlined
} from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { dark } from '@material-ui/core/styles/createPalette';
import './NavbarComponent.css'
import SideNavbar from './SideNavbar';
const { Search } = Input;
const { SubMenus } = Menu;
const { SubMenu } = Menu;

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
  


  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  fixSearchItem(e){
    e.preventDefault();
    this.setState({[e.target.name]:e.target.value});  
    
  }
  logOut() {
    sessionStorage.removeItem("userInfo");  
    sessionStorage.clear("userId");
    toast.success('Thanks for visiting our site!',{position:toast.POSITION.TOP_RIGHT, autoClose:3000})
    
  } 

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" >
      <Menu.Item key="mail">
        <Link className="navbar-brand" to={"/home"}><img className="logo" src={ require('../images/logo1.jpg') } /><b  style={{ color : dark}}><i>Happy Buy</i></b> </Link>
      </Menu.Item>
      <Menu.Item key="app" onSubmit={this.onFormSubmit}>
      <Input
       name="searchItem"
      placeholder="Serach for products"
      value={this.state.searchItem} 
      onChange={this.fixSearchItem}
      style={{ width: 500 }}
    />   
      </Menu.Item>
      <Link  className="btn btn-outline-secondary" to={"/searchProduct/"+this.state.searchItem}> <SearchOutlined /> </Link>
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
         <BarsOutlined />   Search by Category
          </span>
        }
      >
        <Menu.ItemGroup title="Categories">
          <Menu.Item key="setting:1"> <Link type="submit"  to={"/searchProduct/Appliances,Electronics"}>Appliances,Electronics</Link></Menu.Item>
          <Menu.Item key="setting:2"><Link type="submit"  to={"/searchProduct/Men's Fashions"}>Men's Fashions</Link></Menu.Item>
          <Menu.Item key="setting:3"><Link type="submit"  to={"/searchProduct/Womens's Fashions"}>Womens's Fashions</Link></Menu.Item>
          <Menu.Item key="setting:4"><Link type="submit"  to={"/searchProduct/Books"}>Books</Link></Menu.Item>
          <Menu.Item key="setting:4"><Link type="submit"  to={"/searchProduct/Home,Kitchen,Pets"}>Home,Kitchen,Pets</Link></Menu.Item>
          <Menu.Item key="setting:4"><Link type="submit"  to={"/searchProduct/Sports,Fitness"}>Sports,Fitness</Link></Menu.Item>
          <Menu.Item key="setting:4"><Link type="submit"  to={"/searchProduct/Mobiles,Computers"}>Mobiles,Computers</Link></Menu.Item>
          <Menu.Item key="setting:4"><Link type="submit"  to={"/searchProduct/Toys,Baby Products"}>Toys,Baby Products</Link></Menu.Item>
          <Menu.Item key="setting:4"><Link type="submit"  to={"/searchProduct/Gift Cards"}>Gift Cards</Link></Menu.Item>

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
      <ShoppingCartOutlined />
        <Link type="submit"  to={"/cart"}><b>Cart</b></Link>
         </Menu.Item>
        <Menu.Item className="links">
        <Link type="submit" onClick={this.logOut} to={"/login"}><LogoutOutlined /><b>LogOut</b></Link>
      </Menu.Item>
    </Menu>

    );
  }
}

export default NavbarIn

