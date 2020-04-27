import React,{useState,useEffect} from 'react'
import { Select,Slider,Button,Row, Col } from 'antd';
import {FunnelPlotFilled} from '@ant-design/icons';
import { Radio } from 'antd';
const { Option } = Select;
function Filter({filter,filterByPrice,...product}) {
    const [products,setProducts]=useState(product.product);
    const [min,setMinPrice]=useState(0);
    const [max,setMaxPrice]=useState(100);
    const [filtered,setFiltered]=useState(product.product);
    const [enable,setEnable]=useState(true);
    const [sortBy,setSortType]=useState(0);
    let temp = [];
    const marks = {
        0: '100',
        10:'500',
        30:'1500',
        50: '5000',
        75: '10000',
        90: '25000',
        100:'40000'
      };
    function onChange(value) {
        setMinPrice(value[0]);
        setMaxPrice(value[1]);
      for(let i=0; i<product.product.length;i++)
      {
          if(product.product[i].productPrice > marks[value[0]] && product.product[i].productPrice < marks[value[1]])
          {
          temp.push(product.product[i]);
          }
      }
      if(sortBy === 1){
        temp.sort(function(a,b){
          return a.productPrice - b.productPrice;
        })
      }
      else if(sortBy === 2)
      {
        temp.sort(function(a,b){
          return b.productPrice - a.productPrice;
        })
      }
      setProducts(temp);
      setEnable(false);
  }
  function sortProduct(e)
  {
    setSortType(e.target.value)
    if(e.target.value === 1){
      products.sort(function(a,b){
        return a.productPrice - b.productPrice;
      })
    }
    else if(e.target.value === 2)
    {
      products.sort(function(a,b){
        return b.productPrice - a.productPrice;
      })
    }
    console.log(products)
    setEnable(false);
  }
     
    return (
        <div >
          <Row justify="center">
            <Col span={8}>
            <Slider range marks={marks}  onChange={onChange} step={null} value={[min,max]} />
            </Col>
            <Col span={4}>
            <Radio.Group defaultValue="" buttonStyle="solid">
              <Radio.Button onChange={sortProduct} value={1}  >Low-High</Radio.Button>
              <Radio.Button  onChange={sortProduct} value={2}>High-Low</Radio.Button>
            </Radio.Group>
            </Col>
            <Col span={2}>
            <Button shape="circle" disabled={enable} danger icon={<FunnelPlotFilled />} onClick={()=>filter(products)}></Button>
            </Col>
          </Row>
        </div>
    )
}

export default Filter

