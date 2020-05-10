import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LogIn from './Components/LogIn'
import Home from './Components/Home';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route  path="/home" component={Home} />
          <Route  path="/" component={LogIn} />
          <Route  path="/home" component={Home} />
          <Route  path="/login" component={LogIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
