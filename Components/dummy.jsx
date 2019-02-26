import React, {Component} from "react";
import ReactDOM from "react-dom";
const axios = require('axios');

class Dummy extends Component{
  constructor(props) {
    super(props);
    this.state = {name: 'McDonalds'};
  }

componentDidMount() {
  axios.get('http://localhost:3001/wild', {
    crossdomain: true })
    .then(res => {
      this.setState({
        name: res.data.name
      })
      console.log(res);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}


  render(){
    return(
      <div className="App">
        <h1>Would you like a reservation at {this.state.name}?</h1>
      </div>
    );
  }
}

const wrapper = document.getElementById("root");

wrapper ? ReactDOM.render(<Dummy />, wrapper) : false;

export default Dummy;
