import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import LandProduct from '../components/SearchProduct';
import Login from "../components/LogIn";

export const PageRoute = ({ user }) => {
    const userLoggedIn = sessionStorage.getItem("userInfo");
  return (
    <Router>
      
    </Router>
  );
};