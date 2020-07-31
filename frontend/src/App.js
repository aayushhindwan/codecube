import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import NavBar from './components/nav'
import Home from './components/home'
import Practice from './components/practice'
import Doubts from './components/doubts'
import Questions from "./components/questions"
import Profile from './components/profile'
import {useSelector} from 'react-redux'

function App() {
 const store = useSelector(state => state.story.name)
  console.log(store);

  return (
    <div className="App">
      <NavBar />
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/practice' component={Practice}/>
          <Route path='/doubts' component={Doubts}/>
          <Route path='/questions' component={Questions}/>
          <Route path ='/profile' component = {Profile} />
      </Switch>
    </div>
  );
}

export default App;
