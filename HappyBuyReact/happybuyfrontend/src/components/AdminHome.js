import React from 'react'
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  ShakeOutlined,
  BuildOutlined,
  BarsOutlined,
  SettingOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

export default function AdminHome() {
    return (
        <div>
            <Layout>
   
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <TeamOutlined />
          <span className="nav-text">Customers</span>
        </Menu.Item>
        <Menu.Item key="2">
        <BarsOutlined />
          <span className="nav-text">Orders</span>
        </Menu.Item>
        <Menu.Item key="3">
        <BuildOutlined />   
               <span className="nav-text">Products</span>
        </Menu.Item>
        <Menu.Item key="4">
        <ShopOutlined />
          <span className="nav-text">Stock</span>
         
        </Menu.Item>
        <Menu.Item key="5">
        <BarChartOutlined />
          <span className="nav-text">Sales</span>
          
        </Menu.Item>
        <Menu.Item key="6">
        <CloudOutlined />
          <span className="nav-text">Vendors</span>
         
        </Menu.Item>
        <Menu.Item key="7">
        <AppstoreOutlined />
          <span className="nav-text">Offers</span>
       
        </Menu.Item>
        <Menu.Item key="8">
        <ShakeOutlined />    
              <span className="nav-text">Courier services</span>
        </Menu.Item>
        <Menu.Item key="9">
        <SettingOutlined />
              <span className="nav-text">Settings</span>
        </Menu.Item>

      </Menu>
    </Sider>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          ...
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
         
         
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
        </div>
    )
}
