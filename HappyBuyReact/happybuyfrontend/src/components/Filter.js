import React,{useState,useEffect} from 'react'
import { Select,Slider,Button,Row, Col } from 'antd';
import {FunnelPlotFilled} from '@ant-design/icons';
import { Radio } from 'antd';
import { Rate } from 'antd';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Layout, Menu } from 'antd';
import {
  Form,
  InputNumber,
  Switch,

  Upload,
  Checkbox,

} from 'antd';
const { Option } = Select;
function Filter({filter,...product}) {
    const [products,setProducts]=useState(product.product);
    const [min,setMinPrice]=useState(0);
    const [max,setMaxPrice]=useState(100);
    const [filtered,setFiltered]=useState(product.product);
    const [enable,setEnable]=useState(true);
    const [sortBy,setSortType]=useState(0);
    let temp = [];
    const marks = {
        0:'500',
        20:'2000',
        45: '6000',
        70: '15000',
        100:'40000'
      };


  function onChange(value) {
    console.log(value[0])
    console.log(value[1])
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
    if(value[0] === 0 && value[1] === 100)
    {
      return;
    }
    else if (value[0] !== 0 && value[1] !== 100)
    {
      averageRange(value);
    }
    else if (value[0] === 0 && value[1] !== 100)
    {
      minPriceReached(value)
    }
    else if (value[0] !== 0 && value[1] === 100)
    {
      maxPriceReached(value)
    }

  }
  function maxPriceReached(value)
  {
      for(let i=0; i<product.product.length;i++)
      {
          if(product.product[i].productPrice > marks[value[0]] )
          {
          temp.push(product.product[i]);
      }
  }
  setProducts(temp);
  }
  function minPriceReached(value)
  {
      for(let i=0; i<product.product.length;i++)
      {
          if(product.product[i].productPrice < marks[value[1]])
          {
          temp.push(product.product[i]);
          }
      }
      setProducts(temp);
  }
  
  function averageRange(value)
  {
      for(let i=0; i<product.product.length;i++)
      {
          if(product.product[i].productPrice > marks[value[0]] && product.product[i].productPrice < marks[value[1]])
          {
          temp.push(product.product[i]);
          }
      }
      setProducts(temp);
  }
  function sortByRating(e){
    console.log(e.target.value)
    let rateArray =[];
    for(let i=0; i< product.product.length; i++)
    {
      if(product.product[i].productSpecification >= e.target.value)
      {
        rateArray.push(product.product[i]);
      }
    }
    console.log(rateArray)
    setEnable(false);
    setProducts(rateArray)
  }
    return (
        <div>
          <h6 className="text-center" style={{"float":"center"}}>Filter  <FunnelPlotFilled /></h6>
          <hr/>
          <Nav vertical>
               <NavLink style={{backgroundColor:"#B6B6B4", "font-weight": "5" }} ><Slider range marks={marks}  onChange={onChange} onAfterChange={()=>filter(products)} step={null} value={[min,max]} /></NavLink> 
               <br/><br/><br/><br/><br/>
               <hr/>
               <NavLink >{min === 0 ? 
                  <b>Min Price : <i> {"<"} &#x20b9; {marks[min]}</i></b>
                  : <b>Min Price :<i> &#x20b9; {marks[min]}</i> </b>
                    }
                </NavLink> 
               <NavLink >{max === 100 ?
                <b>Max Price : <i>&#x20b9; {marks[max]} {"+"}</i></b>
                :  
                 <b>Max Price : <i>&#x20b9;{marks[max]}</i></b> 
                }
                 </NavLink> 
                 <NavLink ><hr/> </NavLink >
               <NavLink >
               <Radio.Group>
                  <h6>Ratings : </h6><br/>
                  <Radio value='1'onChange={sortByRating} ><Rate disabled defaultValue={1} /></Radio><br/>
                  <Radio value='2' onChange={sortByRating}><Rate disabled defaultValue={2} /></Radio><br/>
                  <Radio value='3'onChange={sortByRating}><Rate disabled defaultValue={3} /></Radio><br/>
                  <Radio value='4' onChange={sortByRating}><Rate disabled defaultValue={4} /></Radio><br/>
                  <Radio value='5' onChange={sortByRating}><Rate disabled defaultValue={5} /></Radio><br/>
              </Radio.Group>
               </NavLink>
               <NavLink ><Button  disabled={enable} danger icon={<FunnelPlotFilled />} onClick={()=>filter(products)}>Flter</Button></NavLink> 
          </Nav>
     
          {/* <Row  justify="start">
            <Col span={10} style={{ marginLeft:20}}>
            <Slider range marks={marks}  onChange={onChange} step={null} value={[min,max]} />
            </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Col span={6}>
            <Radio.Group defaultValue="" buttonStyle="solid">
              <b>Set Price : </b>
              <Radio.Button onChange={sortProduct} value={1}  >Low-High</Radio.Button>&nbsp;&nbsp;
              <Radio.Button  onChange={sortProduct} value={2}>High-Low</Radio.Button>
            </Radio.Group>
            </Col>
            <Col span={2}>
            <Button  disabled={enable} danger icon={<FunnelPlotFilled />} onClick={()=>filter(products)}>Flter</Button>
            </Col>
          </Row> */}
        </div>
    )
}

export default Filter

