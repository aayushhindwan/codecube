import React from 'react';
import {Link} from "react-router-dom";
import {Navbar,Nav,NavDropdown,Form,} from 'react-bootstrap'
import '../assests/scss/navBar.css'
import styled from 'styled-components'

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

    return (
        <Styles>
     <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#home">Coding Cube</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-5 navbar">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/practice">Practice</Nav.Link>
      <Nav.Link href="/doubts">Doubts</Nav.Link>
      <Nav.Link href="/questions">Questions</Nav.Link>  
    </Nav>
    <Navbar.Brand href="#" className="ml-auto"><Link to="/profile">aayushindwan</Link></Navbar.Brand>
  </Navbar.Collapse>
</Navbar>

  </Styles>
    )
}

export default NavBar;