import React, { Component } from 'react';

import './App.css';
import Greet from './PracticeComponents/Greet';
import Welcome from './PracticeComponents/Welcome';
import Message from './PracticeComponents/Message';
import Counter from './PracticeComponents/Counter';
import FunctionEventHandler from './PracticeComponents/FunctionEventHandler';
import ClassEventHandler from './PracticeComponents/ClassEventHandler';
import EventBinding from './PracticeComponents/EventBinding';
import ParentComponent from './PracticeComponents/ParentComponent';
import ConditionalRendering from './PracticeComponents/ConditionalRendering';
import ListRendering from './PracticeComponents/ListRendering';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import SearchProduct from './components/SearchProduct'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Redirect } from "react-router-dom";
import {PageRoute} from './PracticeComponents/PageRoute';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { MDBCol, MDBFormInline, MDBBtn,MDBMask, MDBView, MDBContainer, MDBRow } from "mdbreact";

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WelcomePage from './components/WelcomePage';

toast.configure()
function App() {
  return (
    <Router>
      <WelcomePage/>
    </Router>
  );
}
export default App;
