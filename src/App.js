import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from 'react-router-dom';
import './App.css';
import messageScreen from './messageScreen';
import  NavBar from './Navbar';
import LoginForm from './LoginForm';
import CSVTest from './Components/CSVTest';

function App() {

  return (
    <div className="App">
     <Route path="" component={NavBar}></Route>
    <Switch>
      <Route path="/LogIn" component={LoginForm}></Route>
      <Route path="/personalizado" component={messageScreen}></Route>
    </Switch>

    </div>
    
  );
}

export default App;
