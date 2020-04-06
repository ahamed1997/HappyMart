import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SignUp from './SignUp';
import Home from './Home';
import LandProduct from './SearchProduct';
import Login from "./LogIn";

export const PageRoute = ({ user }) => {
    const userLoggedIn = sessionStorage.getItem("userInfo");
  return (
    <Router>
      
    </Router>
  );
};