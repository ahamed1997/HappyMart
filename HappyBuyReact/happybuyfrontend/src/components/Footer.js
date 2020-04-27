
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './NavbarComponent.css'

const Footer= () => {
  return (
    <div className="footer">
<MDBFooter  className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
        <MDBCol md="4">
        <h6 className="heading">About</h6>
        <ul>
              <li className="list-unstyled">
                <p>Happybuy is a global commerce and payments leader, providing a robust platform where merchants of all sizes can compete and win. 
                Happybuy connects millions of buyers and sellers and enabled $205 billion. For more information about the company and its global portfolio of online brands, visit <a href="http://localhost:3000/">www.happybuy.com</a> 
                </p>
              </li>
             
            </ul>
          </MDBCol>
          <MDBCol md="2">
          <h6 className="heading">About</h6>
            <ul>
              <li className="list-unstyled">
                Contact Us
              </li>
              <li className="list-unstyled">
                About Us
              </li>
              <li className="list-unstyled">
                Happybuy Stories
              </li>
            </ul>
          </MDBCol>

          <MDBCol md="2">
          <h6 className="heading">Help</h6>            
          <ul>
              <li className="list-unstyled">
                Payments
              </li>
              <li className="list-unstyled">
                Shipping
              </li>
              <li className="list-unstyled">
                Cancellation & Returns
              </li>
              <li className="list-unstyled">
                FAQ
              </li>
            </ul>
          </MDBCol>
          <div className="vl"></div>

          <MDBCol md="3">
          <b className="heading">Registered Office Address</b>
            <ul>
              <li className="list-unstyled">
                Happybuy Privated Limited,
              </li>
              <li className="list-unstyled">
               5/3 Ethuga Street, B.P.Agraharam
              </li>
              <li className="list-unstyled">
                Erode, 638005
              </li>
              <li className="list-unstyled">
               Tamilnadu, India
              </li>
              <li className="list-unstyled">
                CIN : 730214104002
              </li>
              <li className="list-unstyled">
              Telephone : <a href="http://localhost:3000/"> +91 944 577 4250 </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="http://localhost:3000/"> happybuy.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
    
  );
}

export default Footer;