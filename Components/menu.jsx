import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Provided from '../src/provided_by.png';
import Navbar from 'react-bootstrap/Navbar';
import React, {Component} from "react";
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container';

// class Menu extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedKey: 1,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(id) {
//     this.setState({
//       selectedKey: id
//     });
//   }

 function Menu({menu1, menu2, menuThree, menuFour, menuFive}) {
    return(
      <Container>
        <Nav
          onSelect={selectedKey => handleClick({selectedKey})}
        >
          <Nav.Item>
            <Nav.Link eventKey="1" href="/home">Lunch</Nav.Link>
            {menu1}
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2">Dinner</Nav.Link>
            {menu2}
          </Nav.Item>
        </Nav>
        <hr></hr>
        <Row>
          <Col sm={8}>
            <p>Last updated:</p>
          </Col>
          <Col sm={4}>
            <img src={Provided} width="200"></img>
          </Col>
        </Row>
      </Container>
    )}
// }


export default Menu;
