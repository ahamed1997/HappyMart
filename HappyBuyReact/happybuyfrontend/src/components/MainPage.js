import React from 'react';
import { Row, Col } from 'antd';
import './MainPage.css';
import Footer from './Footer';
import { Tooltip } from 'antd';
import {Link } from "react-router-dom";
import { Carousel } from 'antd';
import { yellow } from '@material-ui/core/colors';


export default function MainPage() {


    return (
        <div style={{marginTop:0}}>
            <div className="firstBlock">
                <Row justify="center">
                    <Col span={5}><img className="img" style={{ width:'100%' }} alt="happybuy" src={ require('../images2/sidePic.jpg') } /></Col>
                    <Col span={14}>
                    <Carousel autoplay>
                        <div>
                        <Tooltip placement="bottom" title="HappyBuy"><img style={{ width:'100%' }} alt="happybuy" src={ require('../images2/center1.jpg') } />   </Tooltip>
                        </div>
                        <div>
                        <Tooltip placement="bottom" title="HappyBuy"><img style={{ width:'100%' }} alt="happybuy" src={ require('../images2/center2.jpg') } />   </Tooltip>
                        </div>
                        <div>
                        <Tooltip placement="bottom" title="HappyBuy"><img  style={{ width:'100%' }} alt="happybuy" src={ require('../images2/center3.jpg') } />   </Tooltip>
                        </div>
                        <div>
                        <Tooltip placement="bottom" title="HappyBuy"><img  style={{ width:'100%' }} alt="happybuy" src={ require('../images2/center4.jpg') } />   </Tooltip>
                        </div>
                    </Carousel>
                    </Col>
                    <Col span={5}><img className="img" style={{ width:'100%' }}  alt="happybuy"src={ require('../images2/sidePic.jpg') } /></Col>
                </Row>
            </div>   
            <div className="secondBlock">
                <Row justify="start" style={{ color:yellow}}>
                    <Col span={3} ><Tooltip placement="bottom" title="Shirts & Jeans"><Link to={"/searchProduct/Men's Fashions"}> < img  className="img" style={{ width:'100%' }}  alt="happybuy" src={ require('../images2/menfashion_1.jpg') } /></Link>   </Tooltip></Col>
                    <Col span={3}><Tooltip placement="bottom" title="Women's Fashions"><Link to={"/searchProduct/Women's Fashions"}>< img className="img" style={{ width:'100%',marginTop:223 }} alt="happybuy" src={ require('../images2/womenfashion_1.jpg') } /></Link>   </Tooltip></Col>
                    <Col span={3}><Tooltip placement="bottom" title="Men's Fashions"><Link to={"/searchProduct/Men's Fashions"}>< img className="img" style={{ width:'100%' }} alt="happybuy" src={ require('../images2/menfashion_2.jpg') } /></Link>     </Tooltip></Col>
                    <Col span={3}><Tooltip placement="bottom" title="Western Wear"><Link to={"/searchProduct/Women's Fashions"}>< img className="img" style={{ width:'100%',marginTop:222  }} alt="happybuy" src={ require('../images2/womenfashion_2.jpg') } /></Link>   </Tooltip></Col>
                    <Col span={12}><Tooltip placement="bottom" title="HappyBuy Clothes"><Link to={"/searchProduct/Fashions"}>< img className="img" style={{ width:'100%' }} alt="happybuy" src={ require('../images2/fashions_1.jpg') } /></Link>   </Tooltip></Col>
                </Row>
            </div>
            <Row justify="start">
                <Col span={6}><Tooltip placement="bottom" title="Fastrack Watches"><Link to={"/searchProduct/Watches"}><img className="img" style={{ width:'100%' }} alt="happybuy" src={ require('../images2/fastrack.jpg') } /></Link>   </Tooltip></Col>
                <Col span={13}><Tooltip placement="bottom" title="Samsung"><Link to={"/searchProduct/Samsung"}><img className="img" style={{ width:'100%' }}  alt="happybuy" src={ require('../images2/samsung_1.jpg') } /></Link>   </Tooltip> </Col>
                <Col span={5}>
                <Tooltip placement="bottom" title="Rolex"><Link to={"/searchProduct/Watches"}><img className="img" style={{ width:'100%' }} alt="happybuy" src={ require('../images2/menwatches_1.jpg') } /></Link>   </Tooltip>
                <Tooltip placement="bottom" title="Titan for Women"><Link to={"/searchProduct/Women's Fashions"}><img className="img" style={{ width:'100%' }} alt="happybuy" src={ require('../images2/womenwatches_1.jpg') } /></Link>    </Tooltip>
                </Col>
            </Row>
            <Row justify="start">
                <Col span={24}>
                <Carousel autoplay>
                        <div>
                        <Tooltip placement="bottom" title="Apple iphone 11"><Link to={"/searchProduct/Apple"}><img className="img" style={{ width:'100%' }}  alt="happybuy" src={ require('../images2/apple_1.jpg') } /></Link>    </Tooltip>
                        </div>
                        <div>
                        <Tooltip placement="bottom" title="Apple iphone 11"><Link to={"/searchProduct/Apple"}><img className="img" style={{ width:'100%' }}  alt="happybuy" src={ require('../images2/apple_2.jpg') } /></Link>    </Tooltip>
                        </div>
                    </Carousel>
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Col span={4} ><Tooltip placement="bottom" title="Rado"><Link to={"/searchProduct/Watches"}><img className="img" style={{ width:'100%' }} alt="happybuy" src={ require('../images2/gallery_1.jpg') } /></Link>    </Tooltip></Col>
                <Col span={4} ><Tooltip placement="bottom" title="Coolers"><Link to={"/searchProduct/Men's Fashions"}><img  className="img" style={{ width:'100%' }} alt="happybuy" src={ require('../images2/gallery_2.jpg') } /></Link>   </Tooltip></Col>
                <Col span={4} ><Tooltip placement="bottom" title="Analog watches"><Link to={"/searchProduct/Watches"}><img  className="img" style={{ width:'100%' }} alt="happybuy" src={ require('../images2/gallery_3.jpg') } /></Link>       </Tooltip></Col>
                <Col span={4} ><Tooltip placement="bottom" title="Trolley Bags"><Link to={"/searchProduct/Trolley"}><img  className="img" style={{ width:'100%' }} alt="happybuy" src={ require('../images2/gallery_4.jpg') } /></Link>        </Tooltip></Col>
                <Col span={4} ><Tooltip placement="bottom" title="Luxury wears"><Link to={"/searchProduct/Men's Fashions"}><img  className="img" style={{ width:'100%' }}  alt="happybuy"src={ require('../images2/gallery_5.jpg') } /></Link>       </Tooltip></Col>
                <Col span={4} ><Tooltip placement="bottom" title="Camera"><Link to={"/searchProduct/Camera"}><img className="img" style={{ width:'100%' }}  alt="happybuy"src={ require('../images2/gallery_6.jpg') } /></Link>     </Tooltip></Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Col span={4} ><Tooltip placement="bottom" title="Travel Duffles"><Link to={"/searchProduct/Men's Fashions"}><img  className="img" style={{ width:'100%' }} alt="happybuy" src={ require('../images2/gallery_7.jpg') } /></Link>        </Tooltip></Col>
                <Col span={4} ><Tooltip placement="bottom" title="Vintage"><Link to={"/searchProduct/Men's Fashions"}><img  className="img" style={{ width:'100%' }} alt="happybuy" src={ require('../images2/gallery_8.jpg') } /></Link>       </Tooltip></Col>
                <Col span={4} ><Tooltip placement="bottom" title="Sunglasses"><Link to={"/searchProduct/Sunglass"}><img className="img" style={{ width:'100%' }}alt="happybuy" src={ require('../images2/gallery_9.jpg') } /></Link>     </Tooltip></Col>
                <Col span={4} ><Tooltip placement="bottom" title="Travel around"><Link to={"/searchProduct/Mobile"}><img className="img" style={{ width:'100%' }} alt="happybuy" src={ require('../images2/gallery_10.jpg') } /> </Link>       </Tooltip></Col>
                <Col span={4} ><Tooltip placement="bottom" title="Mobile's"><Link to={"/searchProduct/Mobile"}><img className="img" style={{ width:'100%' }} alt="happybuy" src={ require('../images2/gallery_11.jpg') } /></Link>        </Tooltip></Col>
                <Col span={4} ><Tooltip placement="bottom" title="Western Wear"><Link to={"/searchProduct/Western Wear"}><img className="img" style={{ width:'100%' }} alt="happybuy" src={ require('../images2/gallery_12.jpg') } /></Link>        </Tooltip></Col>
            </Row>
            <Footer/>
        </div>
    )
}
