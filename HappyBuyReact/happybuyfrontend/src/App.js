import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from "react-router-dom";
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
