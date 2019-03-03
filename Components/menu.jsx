import Nav from 'react-bootstrap/Nav';
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
    </Container>
  )}
// }


export default Menu;
