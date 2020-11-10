import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import {Navbar,Nav,NavDropdown,Form, Button,} from 'react-bootstrap'
import '../assests/scss/navBar.css'
import styled from 'styled-components'
import axios from 'axios';import domain from '../domain.js'
const Styles = styled.div`
.navbar{
    color : white;
     
.navbar-link, .navbar-brand ,navbar-nav{
    color : white;
    font-weight : bolder;
    font-size: 25px
}

.nav-link
{
    color : white
}`
const NavBar = (props) => {
  const [logout,change]=useState(false);
  function x()
  {
    if(logout)
    return(<Button onClick={()=>{localStorage.Token=undefined;window.location.reload();}}>Logout</Button>)
  }
 
  useEffect(()=>
  {  
     axios.get(domain+'/isSignedIn',{
      headers: {
        'authorization': 'Bearer '+ localStorage.Token,
      }
    }).then(res=>{
      if(res.status==200)
       change(true);

     });

  },[]);
    return (
        <Styles>
     <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="/home">Coding Cube</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-5 navbar">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/practice">Practice</Nav.Link>
      <Nav.Link href="/doubts">Doubts</Nav.Link>
      <Nav.Link href="/questions">Questions</Nav.Link>  
    </Nav>
    <Navbar.Brand href="#" className="ml-auto"><Link to="/profile">Profile</Link></Navbar.Brand>
    {
  x()
}
  </Navbar.Collapse>
  
</Navbar>

  </Styles>
    )
}

export default NavBar;