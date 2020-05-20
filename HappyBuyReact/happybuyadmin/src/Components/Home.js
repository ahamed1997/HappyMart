import React from 'react'
import { Layout, Menu } from 'antd';
import '../CSS/Home.css';
import {
  BarChartOutlined,
  CloudServerOutlined,
  ShopOutlined,
  TeamOutlined,
  SettingOutlined,
  BuildOutlined,
  BarsOutlined,
  LogoutOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import Customer from './Customer';
import Orders from './Orders';
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";
import Courier from './Courier';
import Offers from './Offers';
import Products from './Products';
import Vendors from './Vendors';
import Stock from './Stock';
import Sales from './Sales';
import Settings from './Settings';
import Dashboard from './Dashboard';

const {  Content, Sider } = Layout;

export default function Home() {

  const ProtectedRoute =({component:Component, ...rest}) =>{
    return <Route {...rest} render = {(props)=>{
      return sessionStorage.getItem("token") ? <Component {...props}/> : <Redirect to={'/login'} />
    }}    
    />
  }
    function logout()
    {
        sessionStorage.clear();
    }
    return (
        <React.Fragment>
            <Router>
           <Layout>
           <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
        <div className="title"><img className="logo" alt="" src={ require('../Images/logo.png')} />HappyBuy</div> 
        <div className="seperator"></div>
        <Menu.Item key="0">
        <HomeOutlined />
          <Link  className="nav-text" to={{pathname:"/home/dasboard"}}>Home</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <TeamOutlined />
          <Link  className="nav-text" to={{pathname:"/home/customer"}}>Customers</Link>
        </Menu.Item>
        <Menu.Item key="2">
        <BarsOutlined />
        <Link className="nav-text" to={{pathname:"/home/order"}}>Orders</Link>
        </Menu.Item>
        <Menu.Item key="3">
        <BuildOutlined />   
        <Link className="nav-text" to={{pathname:"/home/product"}}>Products</Link>
        </Menu.Item>
        <Menu.Item key="4">
        <ShopOutlined />
        <Link className="nav-text" to={{pathname:"/home/stock"}}>Stock</Link>
        </Menu.Item>
        <Menu.Item key="5">
        <BarChartOutlined />
        <Link className="nav-text" to={{pathname:"/home/sales"}}>Sales</Link>
        </Menu.Item>
        <Menu.Item key="6">
        <CloudServerOutlined />
        <Link className="nav-text" to={{pathname:"/home/vendor"}}>Vendors</Link>
        </Menu.Item>
        {/* <Menu.Item key="7">
        <DollarCircleOutlined />
        <Link className="nav-text" to={{pathname:"/home/offer"}}>Offers</Link>
        </Menu.Item>
        <Menu.Item key="8">
        <ShakeOutlined />    
        <Link className="nav-text" to={{pathname:"/home/courier"}}>Courier services</Link>
        </Menu.Item> */}
        <Menu.Item key="9">
        <SettingOutlined />
        <Link className="nav-text" to={{pathname:"/home/settings"}}>Settings</Link>
        </Menu.Item>
        <Menu.Item key="10">
        <LogoutOutlined />
        <a onClick={logout} href="/login">Logout</a>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
         <Content className="site-layout-background" style={{padding: 24,overflow: 'initial' }}>
        <div>
            <Switch>
                <ProtectedRoute exact  path="/home/dasboard" component={Dashboard} />
                <ProtectedRoute exact  path="/home/customer" component={Customer} />
                <ProtectedRoute exact  path="/home/order" component={Orders} />   
                <ProtectedRoute exact path="/home/courier" component={Courier} />
                <ProtectedRoute exact path="/home/offer" component={Offers} />
                <ProtectedRoute exact path="/home/product" component={Products} />
                <ProtectedRoute exact path="/home/vendor" component={Vendors} />
                <ProtectedRoute exact path="/home/stock" component={Stock} />
                <ProtectedRoute exact path="/home/sales" component={Sales} />
                <ProtectedRoute exact  path="/home/settings" component={Settings} />
                <ProtectedRoute exact  path="/home/" component={Dashboard} />
            </Switch>
        </div>
      </Content>
    </Layout>
  </Layout>
  </Router>
  </React.Fragment>
    )
}
