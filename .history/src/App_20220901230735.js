import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ButtonDropdown, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Navbar,NavbarBrand} from "reactstrap"


class App extends Component {
  render() {
    function Example({ direction, ...args }) {
      const [dropdownOpen, setDropdownOpen] = useState(false);
    
      const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
      <div>
        <Navbar dark color="primary"> 
        <NavbarBrand href="/">Huzaifa</NavbarBrand>
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu {...args}>
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

