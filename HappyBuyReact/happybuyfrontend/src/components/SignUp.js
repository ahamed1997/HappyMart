// import React, { Component } from 'react'
// import axios from 'axios';  
// import './SignUp.css';
// import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
// class SignUp extends Component {
//     constructor(props){  
//             super(props)  
//             this.state = {  
//                 CustomerFirstName:'',  
//                 CustomerLastName:'',  
//                 CustomerMobile:'',  
//                 CustomerEmail:'',
//                 CustomerPassword:''
//                 }  
//         }  

//         Addstudent=()=>{  
//             const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
//              axios.post('https://localhost:44376/api/RegisterCustomer/', this.state, {
//                 headers:headers
//              }
//             )  
//           .then(json => {  
//           if(json.data.Status==='Success'){  
//             console.log(json.data.Status);  
//             alert("Data Save Successfully");  
//           //this.props.history.push('/Studentlist')  
//           }  
//           else{  
//           alert('Data not Saved');  
//           debugger;  
//           //this.props.history.push('/Studentlist')  
//           }  
//           })  
//           }  
//           handleChange= (e)=> {  
//           this.setState({[e.target.name]:e.target.value});  
//           }  
//     render() {
//         return (  
//             <Container className="App">  
//              <h4 className="PageHeading">SignUp</h4>  
//              <Form className="form">  
//                <Col>  
//                  <FormGroup row>  
//                    <Label for="CustomerFirstname" sm={2}>FirstName</Label>  
//                    <Col sm={12}>  
//                      <Input type="text" name="CustomerFirstname" onChange={this.handleChange} value={this.state.CustomerFirstname} placeholder="Enter FirstName" />  
//                    </Col>  
//                  </FormGroup>  
//                  <FormGroup row>  
//                    <Label for="CustomerLastname" sm={2}>LastName</Label>  
//                    <Col sm={12}>  
//                      <Input type="text" name="CustomerLastname" onChange={this.handleChange} value={this.state.CustomerLastname} placeholder="Enter LastName" />  
//                    </Col>  
//                  </FormGroup>  
//                  <FormGroup row>  
//                    <Label for="CustomerMobile" sm={2}>Mobile</Label>  
//                    <Col sm={12}>  
//                      <Input type="text" name="CustomerMobile" onChange={this.handleChange} value={this.state.CustomerMobile} placeholder="Enter Mobile Number" />  
//                    </Col>  
//                  </FormGroup>  
//                  <FormGroup row>  
//                    <Label for="CustomerEmail" sm={2}>Email</Label>  
//                    <Col sm={12}>  
//                      <Input type="text" name="CustomerEmail" onChange={this.handleChange} value={this.state.CustomerEmail} placeholder="Enter Email" />  
//                    </Col>  
//                  </FormGroup>  
//                  <FormGroup row>  
//                    <Label for="CustomerPassword" sm={2}>Password</Label>  
//                    <Col sm={12}>  
//                      <Input type="text" name="CustomerPassword" onChange={this.handleChange} value={this.state.CustomerPassword} placeholder="Enter Password" />  
//                    </Col>  
//                  </FormGroup>  
//                </Col>  
//                <Col>  
//                  <FormGroup row>  
//                    <Col sm={3}>  
//                    </Col>  
//                    <Col sm={3}>  
//                    <button type="button" onClick={this.Addstudent} className="btn btn-success">Submit</button>  
//                    </Col>  
//                    <Col sm={3}>  
//                      <Button color="danger">Cancel</Button>{' '}  
//                    </Col>  
                   
//                  </FormGroup>  
//                </Col>  
//              </Form>  
//            </Container>  
//          );  
//     }
// }

// export default SignUp
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';  
export default class SignUp extends Component {
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
    
registerCustomer=(event)=>{ 
  const headers={ 'Content-Type': 'application/json','Accept': 'application/json',}
  if(this.state.CustomerEmail && this.state.CustomerFirstName && this.state.CustomerLastName && this.state.CustomerMobile && this.state.CustomerPassword  != '') {
    axios.post('https://localhost:44376/api/RegisterCustomer/', this.state, {
      headers:headers
    }
  )  
  .then(json => {  
    if(json.data.Status==='Success'){  
      console.log(json.data.Status);  
      alert("Registration Done Successfully!");  
            //this.props.history.push('/Studentlist')  
    }  
    else{  

        alert('Registration Failed!');  
            //this.props.history.push('/Studentlist')  
    }  
  }) 
  }else{
    event.preventDefault()
    alert("Please fill the Details..!")
  }
 
   
}  
    handleChange= (e)=> {  
            this.setState({[e.target.name]:e.target.value});  
            }  
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" name="CustomerFirstName" onChange={this.handleChange} value={this.state.CustomerFirstname} className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" name="CustomerLastName" onChange={this.handleChange} value={this.state.CustomerLastName} className="form-control" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label>Mobile</label>
                    <input type="text" name="CustomerMobile" onChange={this.handleChange} value={this.state.CustomerMobile} className="form-control" placeholder="Mobile" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="CustomerEmail" onChange={this.handleChange} value={this.state.CustomerEmail} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="CustomerPassword" onChange={this.handleChange} value={this.state.CustomerPassword} onChange={this.handleChange} value={this.state.CustomerFirstname} className="form-control" placeholder="Enter password" />
                </div>

                <button type="button" onClick={this.registerCustomer} className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link  to={"/sign-in"}>sign in?</Link>
                </p>
            </form>
        );
    }
}