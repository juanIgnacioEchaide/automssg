import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from 'react-router-dom';
import './App.css';
import CustomizedMessage from './CustomizedMessage';
import TemplateMessage from './TemplateMessage';

function App() {

  return (
    <div className="App">
    <Switch>
      <Route path="/personalizado" component={CustomizedMessage}></Route>
      <Route path="/plantilla" component={TemplateMessage}></Route>
    </Switch>

    </div>
    
  );
}

export default App;
