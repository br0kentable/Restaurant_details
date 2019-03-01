import css from '../src/styles.scss'
import Eatery from './eatery';
import React, {Component} from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css';
// import { library, dom } from "@fortawesome/fontawesome-svg-core";
// import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

ReactDOM.render(<Eatery />, document.getElementById('root'));
