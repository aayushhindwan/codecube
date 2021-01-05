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
import QuestionById from './components/questionById'
import LandingPage from './components/landingPage'
import {useSelector} from 'react-redux'
import Login from './components/login'
import Signup from './components/signup'
import AddQuestion from  './components/addingQuestion'
import PracticeAllQuestion from './components/practiceAllQuestion'

function App() {
 const store = useSelector(state => state.story.name)
  console.log(store);

  return (
    <div>
      <NavBar />
      <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/home' component={Home}/>
          <Route path='/practice' component={PracticeAllQuestion}/>
          <Route path='/practiceById/:id' component={Practice}/>

          <Route path='/contribute' component={AddQuestion}/>
          <Route path='/doubts' component={Doubts}/>
          <Route path='/questions' component={Questions}/>
          <Route path ='/profile' component = {Profile} />
          <Route path = '/login' component ={Login} />
          <Route path = '/signup' component = {Signup} />
          <Route path = '/questionById/:id' component = {QuestionById} />
      </Switch>
    </div>
  );
}

export default App;
