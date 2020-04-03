import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionEventHandler from './components/FunctionEventHandler';
import ClassEventHandler from './components/ClassEventHandler';
import EventBinding from './components/EventBinding';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      {/* 

      <Greet name="Tom">
        <p>This is first paragraph</p>
      </Greet>
      <Greet name="Jerry">
        <button>Submit</button>
      </Greet>

      <Greet name="Tom" realname="Cat"/>

      <Greet name="Jerry" realname="Mouse"/>

      /* ReUsability of component 

      <Welcome name="Batman"/>
      <Welcome name="Spiderman" />       */}

      {/* <Message></Message> */}

      {/* <FunctionEventHandler></FunctionEventHandler>

      <ClassEventHandler></ClassEventHandler> */}

      {/* <Greet name="Tom" realname="Cat"/>

      <Counter></Counter> */}

      {/* <EventBinding></EventBinding> */}

      {/* <ParentComponent></ParentComponent> */}

      {/* <ConditionalRendering></ConditionalRendering> */}

      {/* <ListRendering></ListRendering> */}

      {/* <LogIn></LogIn> */}

      <SignUp></SignUp>

        {/* <Home></Home>       */}
    </div>

  );
}

export default App;
