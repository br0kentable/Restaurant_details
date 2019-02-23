// import React, {Component} from "react";
// import { hot } from 'react-hot-loader/root';
// const axios = require('axios');
import _ from 'lodash';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

// class App extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {name: 'Unknown'};

//     // this.handleClick = this.handleClick.bind(this);
//   }

//   componentDidMount() {
//     axios.get('/listings?id=thfUjkN4Tv')
//       .then(function (response) {
//         this.setState({
//           name: res.name
//         })
//         console.log(response);
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       })
//       // .then(function () {
//       // });
//   }

//   render(){
//     return(
//       <div className="App">
//         <h1> Hello, World! </h1>
//       </div>
//     );
//   }
// }

// export default hot(App)