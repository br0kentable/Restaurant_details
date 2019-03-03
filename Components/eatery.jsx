import React, {Component} from "react";
import ReactDOM from "react-dom";
const axios = require('axios');
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VenueDetails from '/Users/io/Code/GitHub/Restaurant_details/Components/VenueDetails.jsx';
import Heading from '/Users/io/Code/GitHub/Restaurant_details/Components/heading.jsx';
import PhotoHeading from '/Users/io/Code/GitHub/Restaurant_details/Components/photoHeading.jsx';
import DetailsSub from '/Users/io/Code/GitHub/Restaurant_details/Components/detailsSubheading.jsx'
import PhotoBase from '/Users/io/Code/GitHub/Restaurant_details/Components/photoBase.jsx';
import Menu from '/Users/io/Code/GitHub/Restaurant_details/Components/menu.jsx';

class Eatery extends Component{
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      description: '',
      menuOne: '',
      menuTwo: '',
      menuThree: '',
      menuFour: '',
      menuFive: '',
      cross_street: '',
      neighborhood: '',
      hours: '',
      style: '',
      dress: '',
      parking: '',
      transit: '',
      payment: '',
      chef: '',
      details: '',
      url: '',
      phone: '',
      parties: '',
      party_contact: '',
      special: '',
    };
  }

componentDidMount() {
  axios.get('http://localhost:3001/wild', {
    crossdomain: true })
    .then(res => {
      this.setState({
        id: res.data.id,
        name: res.data.name,
        description: res.data.description,
        menuOne: res.data.menuOne,
        menuTwo: res.data.menuTwo,
        menuThree: res.data.menuThree,
        menuFour: res.data.menuFour,
        menuFive: res.data.menuFive,
        cross_street: res.data.cross_street,
        neighborhood: res.data.neighborhood,
        hours: res.data.hours,
        style: res.data.style,
        dress: res.data.dress,
        parking: res.data.parking,
        transit: res.data.transit,
        payment: res.data.payment,
        chef: res.data.chef,
        details: res.data.details,
        url: res.data.url,
        phone: res.data.phone,
        parties: res.data.parties,
        party_contact: res.data.party_contact,
        special: res.data.special
      })
    })
    // .then(axios.post('http://localhost:1337/ratings', {
    //   id: this.state.id,
    //   crossdomain: true}))
    // .then(res => console.log('RES', res))
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}


  render(){
    const minutiae = {
      cross_street: this.state.cross_street,
      neighborhood: this.state.neighborhood,
      hours: this.state.hours,
      style: this.state.style,
      dress: this.state.dress,
      parking: this.state.parking,
      transit: this.state.transit,
      payment: this.state.payment,
      chef: this.state.chef,
      details: this.state.details,
      url: this.state.url,
      phone: this.state.phone,
      parties: this.state.parties,
      party_contact: this.state.party_contact,
      special: this.state.special
    }
    return(
      <Container>
        <Heading />
        <PhotoHeading />
        <Navbar bg="light">
          <Nav className="mr-auto">
            <Nav.Link href="/">Overview</Nav.Link>
            <Nav.Link href="#photos">Photos</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#review">Review</Nav.Link>
            <Nav.Link href="#twitter">Twitter</Nav.Link>
          </Nav>
        </Navbar>
        <hr></hr>
        <Row>
          <Col xs='8'><h1 className="mt-4">{this.state.name}</h1></Col>
          <hr></hr>
        </Row>
        <DetailsSub />
        <Row>
          <Col xs='8'><p className="display-4">{this.state.description}</p></Col>
        </Row>
        <PhotoBase />
        <Menu menu1={this.state.menuOne} menu2={this.state.menuTwo}
          menu3={this.state.menuThree} menu4={this.state.menuFour}
          menu5={this.state.menuFive} />
        <Row>
          <Col xs="8"></Col>
          <Col xs='4'>
            <VenueDetails {...minutiae}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Eatery;
