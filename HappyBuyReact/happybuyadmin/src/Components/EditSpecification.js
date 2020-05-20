import React ,{useState} from 'react'
import {  Modal, ModalHeader, ModalBody, Container, Row, Col   } from 'reactstrap';
import {Button} from 'antd';
import {FormOutlined} from '@ant-design/icons';
import AuthService from './AuthService';


function EditSpecification({...specification}) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    const [specificationName, setSpecificationName] = useState(specification.specification.specificationName);
    const [specificationValue, setSpecificationValue] = useState(specification.specification.specificationValue);
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
    const [enableError, setEnableError]=useState(false);
    const reset = () =>
    {
        setEnableError(false);
        setSpecificationValue(specification.specification.specificationValue);
        setSpecificationName(specification.specification.specificationName);
    }
    const saveChanges = ()=>
    {
        if(specificationValue && specificationName !=="")
        {
            setEnableError(false);
            const key = {
                SpecificationId : specification.specification.specificationId,
                SpecificationName :specificationName, 
                 SpecificationValue: specificationValue,
                 SpecificationProductId:specification.specification.specificationProductId  }
            AuthService.updateSpecifications(key)
            .then(result=>{ 
                 setModal(!modal);
            }).catch((error) => {
                AuthService.errorHandling(error)
            })
        }
        else{
            setEnableError(true);
        }
        
    }
    
    return (
        <div>
              <Button type="primary"  onClick={toggle}> <FormOutlined /></Button> 
             <Modal isOpen={modal} toggle={toggle} >
                            <ModalHeader toggle={toggle} close={closeBtn}>
                                Edit Specification </ModalHeader>
                                <ModalBody>
                                <Container>
                                        <Row xs="1">
                                        <Col><b>Specification Name  : </b><input className="form-control" onChange={(e)=>setSpecificationName(e.target.value)} value={specificationName}/>
                                            </Col>                                        </Row>
                                        <Row xs="1">
                                            <Col><b>Specification Value  : </b><input className="form-control" onChange={(e)=>setSpecificationValue(e.target.value)} value={specificationValue}/>
                                            </Col>
                                        </Row>
                                        <hr/>
                                        <Row xs="2">
                                            <Button className="text-center" style={{"float":"center"}} type="primary" onClick={saveChanges}>Save Changes</Button>
                                            <Button className="text-center" style={{"float":"center"}} type="primary" danger onClick={reset}>Reset</Button>
                                        </Row>
                                        <hr/>
                                        <Row xs="2">
                                            {enableError &&  <span className="errorMessage">Please fill the details!</span>}
                                        </Row>
                                    </Container>
                                </ModalBody>
                            </Modal>   
        </div>
    )
}

export default EditSpecification
