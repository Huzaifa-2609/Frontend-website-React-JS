import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ButtonDropdown, Dropdown, DropdownItem, Navbar,NavbarBrand} from "reactstrap"


class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary"> 
        <NavbarBrand href="/">Huzaifa</NavbarBrand>
        <ButtonDropdown> 
        <DropdownToggle caret>
                                           Portafolio
        </DropdownToggle>
        <Dropdown>
          <DropdownItem>Safia</DropdownItem>
          <DropdownItem>Safia</DropdownItem>
          <DropdownItem>Safia</DropdownItem>
        </Dropdown>
        </ButtonDropdown>
        </Navbar>
      </div>
    );
  }
}

export default App;

