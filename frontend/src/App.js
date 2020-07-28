import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import NavBar from './components/nav'
import Home from './components/home'
import Practice from './components/practice'
import Doubts from './components/doubts'
import Questions from "./components/questions"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/practice' component={Practice}/>
          <Route path='/doubts' component={Doubts}/>
          <Route path='/questions' component={Questions}/>
      </Switch>
    </div>
  );
}

export default App;
