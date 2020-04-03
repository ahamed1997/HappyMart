import React, { Component } from 'react'
import axios from 'axios';  
import './SignUp.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class SignUp extends Component {
    constructor(props){  
            super(props)  
            this.state = {  
                CustomerFirstName:'',  
                CustomerLastName:'',  
                CustomerMobile:'',  
                CustomerEmail:'',
                CustomerPassword:''
                }  
        }  
debugger
        Addstudent=()=>{  
            const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
             axios.post('https://localhost:44376/api/RegisterCustomer/', this.state, {
                headers:headers
             }
             //{
            //     CustomerFirstname:this.state.CustomerFirstname,
            //     CustomerLastname:this.state.CustomerLastname,
            //     CustomerMobile:this.state.CustomerMobile, 
            //     CustomerEmail:this.state.CustomerEmail,
            //     CustomerPassword:this.state.CustomerPassword
            // }
            )  
          .then(json => {  
          if(json.data.Status==='Success'){  
            console.log(json.data.Status);  
            alert("Data Save Successfully");  
          //this.props.history.push('/Studentlist')  
          }  
          else{  
          alert('Data not Saved');  
          debugger;  
          //this.props.history.push('/Studentlist')  
          }  
          })  
          }  
          handleChange= (e)=> {  
          this.setState({[e.target.name]:e.target.value});  
          }  
    render() {
        return (  
            <Container className="App">  
             <h4 className="PageHeading">SignUp</h4>  
             <Form className="form">  
               <Col>  
                 <FormGroup row>  
                   <Label for="CustomerFirstname" sm={2}>Fisrt Name</Label>  
                   <Col sm={10}>  
                     <Input type="text" name="CustomerFirstname" onChange={this.handleChange} value={this.state.CustomerFirstname} placeholder="Enter FirstName" />  
                   </Col>  
                 </FormGroup>  
                 <FormGroup row>  
                   <Label for="CustomerLastname" sm={2}>Last Name</Label>  
                   <Col sm={10}>  
                     <Input type="text" name="CustomerLastname" onChange={this.handleChange} value={this.state.CustomerLastname} placeholder="Enter LastName" />  
                   </Col>  
                 </FormGroup>  
                 <FormGroup row>  
                   <Label for="CustomerMobile" sm={2}>Mobile</Label>  
                   <Col sm={10}>  
                     <Input type="text" name="CustomerMobile" onChange={this.handleChange} value={this.state.CustomerMobile} placeholder="Enter Mobile Number" />  
                   </Col>  
                 </FormGroup>  
                 <FormGroup row>  
                   <Label for="CustomerEmail" sm={2}>Email</Label>  
                   <Col sm={10}>  
                     <Input type="text" name="CustomerEmail" onChange={this.handleChange} value={this.state.CustomerEmail} placeholder="Enter Email" />  
                   </Col>  
                 </FormGroup>  
                 <FormGroup row>  
                   <Label for="CustomerPassword" sm={2}>Password</Label>  
                   <Col sm={10}>  
                     <Input type="text" name="CustomerPassword" onChange={this.handleChange} value={this.state.CustomerPassword} placeholder="Enter Password" />  
                   </Col>  
                 </FormGroup>  
               </Col>  
               <Col>  
                 <FormGroup row>  
                   <Col sm={5}>  
                   </Col>  
                   <Col sm={1}>  
                   <button type="button" onClick={this.Addstudent} className="btn btn-success">Submit</button>  
                   </Col>  
                   <Col sm={1}>  
                     <Button color="danger">Cancel</Button>{' '}  
                   </Col>  
                   <Col sm={5}>  
                   </Col>  
                 </FormGroup>  
               </Col>  
             </Form>  
           </Container>  
         );  
    }
}

export default SignUp
