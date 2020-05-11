import React from 'react';
import { Button,  Dropdown } from 'antd';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <Row>
      <Col span={8}>col-8</Col>
      <Col span={8} offset={8}>
        col-8
      </Col>
    </Row>
    <Row>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
    </Row>
    <Row>
      <Col span={12} offset={6}>
        col-12 col-offset-6
      </Col>
    </Row>
      <Button type="primary" block>
      Primary
    </Button>
       <Button type="primary">primary</Button>
        <Button>secondary</Button>
        
       
    </div>
  );
}

export default App;
