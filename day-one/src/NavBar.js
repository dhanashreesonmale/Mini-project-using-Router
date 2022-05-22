import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
<Navbar bg="secondary" expand="bg navbar sticky-top">
  <Container>
    <Navbar.Brand href="#home">My Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink activeClassName="active" className="nav-link"  to='/Dashboard'>Dashboard</NavLink>
        <NavLink activeClassName="active" className="nav-link" to='/AboutUs' >About Us</NavLink>
        <NavLink activeClassName="active" className="nav-link" to='/ContactUs'>Contact Us</NavLink>
        <NavLink activeClassName="active" className="nav-link" to='/products'>Products</NavLink>
        <NavLink activeClassName="active" className="nav-link" to='/Description'>Products-Description</NavLink>
        

       
       
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>



    </div>
  )
}

export default NavBar