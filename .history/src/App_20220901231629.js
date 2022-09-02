import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ButtonDropdown, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Navbar,NavbarBrand} from "reactstrap"


class App extends Component {
  render() {
    
      // const [dropdownOpen, setDropdownOpen] = this.state(false);
      this.state={
        dropdownOpen:false
      }
    
      const toggle = () => this.setState({dropdownOpen:!this.state.dropdownOpen})
    return (
      <div>
        <Navbar dark color="primary"> 
        <NavbarBrand href="/">Huzaifa</NavbarBrand>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem text>Dropdown Item Text</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
        </Navbar>
      </div>
    );
  }
}

export default App;

