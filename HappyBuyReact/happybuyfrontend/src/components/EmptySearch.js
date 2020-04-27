import React from 'react'
import './EmptySearch.css';
import { Row, Col} from 'antd';


function EmptySearch() {
    return (
        <div className="text-center">
            <Row justify="center">
            <Col span={16}>
             <div className="emptySearchImage">  
                  <div className="emptySearchImage"><img className="text-center" alt="" style={{width:'700px'}} src={ require('../images/gif5.gif')} />
                  </div>  
                  <b>Sorry mate.. No Such Product! </b>
                  <a href="/home"><b><i>Click here</i></b></a> <b>to continue Shopping</b>
            </div>
            </Col>
            </Row>
        </div>
    )
}

export default EmptySearch
