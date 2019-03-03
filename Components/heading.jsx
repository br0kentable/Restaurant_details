import Logo from '../src/logo.png';
import Icon from "../src/search.jpg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import React, {Component} from "react";
import ReactDOM from "react-dom";

function Heading() {
  return(
    <Container>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home"><img src={Logo} width="156"></img></Navbar.Brand>
      <NavDropdown title="Title Placeholder" id="basic-nav-dropdown" className="mr-auto p-2">
        <NavDropdown.Item>Metro</NavDropdown.Item>
        <NavDropdown.Item href="/">Atlanta / Georgia</NavDropdown.Item>
        <NavDropdown.Item href="/">Baltimore Area</NavDropdown.Item>
        <NavDropdown.Item href="/">Boston / New England</NavDropdown.Item>
        <NavDropdown.Item href="/">Chicago / Illinois</NavDropdown.Item>
        <NavDropdown.Item href="/">Dallas</NavDropdown.Item>
        <NavDropdown.Item href="/">Denver / Colorado</NavDropdown.Item>
        <NavDropdown.Item href="/">Detroit / Eastern Michigan</NavDropdown.Item>
        <NavDropdown.Item href="/">Houston</NavDropdown.Item>
        <NavDropdown.Item href="/">Las Vegas</NavDropdown.Item>
        <NavDropdown.Item href="/">Los Angeles</NavDropdown.Item>
        <NavDropdown.Item href="/">Miami / Southeast Florida</NavDropdown.Item>
        <NavDropdown.Item href="/">Minneapolis</NavDropdown.Item>
        <NavDropdown.Item href="/">New Orleans / Louisiana</NavDropdown.Item>
        <NavDropdown.Item href="/">New York Area</NavDropdown.Item>
        <NavDropdown.Item href="/">Orange County</NavDropdown.Item>
        <NavDropdown.Item href="/">Philadelphia Area</NavDropdown.Item>
        <NavDropdown.Item href="/">Phoenix</NavDropdown.Item>
        <NavDropdown.Item href="/">San Diego</NavDropdown.Item>
        <NavDropdown.Item href="/">San Francisco Bay Area</NavDropdown.Item>
        <NavDropdown.Item href="/">Seattle Area</NavDropdown.Item>
        <NavDropdown.Item href="/">Tucson</NavDropdown.Item>
        <NavDropdown.Item href="/">Washington, DC</NavDropdown.Item>
      </NavDropdown>
      <ButtonToolbar className="p-2">
        <Button variant="info" href="/" width="92" height="43">Sign up</Button>
        <Button variant="light" href="/" width="92" height="43">Sign in</Button>
      </ButtonToolbar>
      <img src={Icon} href="/" height="30" width="30" className="p-2"></img>
    </Navbar>
    <Navbar>
      <Nav.Link  href="/">Home</Nav.Link >
      <Nav.Link  href="/">United States</Nav.Link >
      <Nav.Link  href="/">Metro Placeholder</Nav.Link >
      <Nav.Link  href="/">Region Placeholder</Nav.Link >
      <Nav.Link  href="/">Region</Nav.Link >
    </Navbar>
  </Container>
)}

export default Heading;
