import React from 'react';
import 'antd/dist/antd.css';
import { Menu,Button } from 'antd';

import {SearchOutlined, BookOutlined,LoginOutlined,UsergroupAddOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { dark } from '@material-ui/core/styles/createPalette';
import './NavbarComponent.css'
import { InputGroup } from 'reactstrap';

const inputCss ={
  border: "0",
  outline:"0",
  background: "transparent",
  borderBottom: "2px solid black",
  fontWeight:"bold",
  width:"350px"
}

class NavbarComponent extends React.Component {
  constructor(props){  
    super(props)  
    this.state = {
      current: 'mail',
      collapsed: false,
      searchItem:"",
      size: 'large',
      search:false
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
  render() {
    return (
      <Menu className="navbar" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
      <Menu.Item key="mail">
        <Link className="navbar-brand" to={"/happybuy"}><img className="logo" alt="" src={ require('../images/logo1.jpg') } /><b  style={{ color : dark}}><i>Happy Buy</i></b> </Link>
      </Menu.Item>
      <Menu.Item >
    <InputGroup>
        <input style={inputCss} value={this.state.searchItem}  onChange={this.fixSearchItem} className="form-control"  name="searchItem" type="text" placeholder="Search" aria-label="Search" />
        <Button size="large" href={"/searchProduct/"+this.state.searchItem} disabled={this.state.searchItem.length > 0  ? false : true}  icon={<SearchOutlined />}>Search</Button>
    </InputGroup>
      </Menu.Item>
      <Menu.Item >
      <BookOutlined />
      <Link type="submit"  to={"/about"}><b>About</b></Link>      
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