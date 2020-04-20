import React from 'react';
import 'antd/dist/antd.css';
import { Menu,Input,Button } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Redirect } from 'react-router'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,SearchOutlined,
  DesktopOutlined,BookOutlined,
  BarsOutlined,LoginOutlined,
  ContainerOutlined,UsergroupAddOutlined
} from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { dark } from '@material-ui/core/styles/createPalette';
import './NavbarComponent.css'

const { Search } = Input;
const { SubMenus } = Menu;

const { SubMenu } = Menu;

class NavbarComponent extends React.Component {
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
  searchProduct()
  {
    if(this.state.searchItem != null)
    {
      
    }
  }
  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
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
    
      <Menu.Item >
      <BookOutlined />
      <Link type="submit"  to={"/login"}><b>About</b></Link>      
         </Menu.Item>
      <Menu.Item className="links">
      <LoginOutlined />
      <Link type="submit"  to={"/login"}><b>LogIn</b></Link>
         </Menu.Item>
        <Menu.Item className="links">
        <UsergroupAddOutlined />
        <Link type="submit"  to={"/sign-up"}><b>SignUp</b></Link>
      </Menu.Item>
    </Menu>

    );
  }
}

export default NavbarComponent