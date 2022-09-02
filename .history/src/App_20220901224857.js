import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar,NavbarBrand} from "reactstrap"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="primary"> 
        <NavbarBrand to="/">Huzaifa</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default App;

