import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar,NavbarBrand} from "reactstrap"


class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary"> 
        <NavbarBrand href="/">Huzaifa</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default App;

