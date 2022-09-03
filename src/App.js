import React, { Component } from 'react';
import './App.css';
import { Navbar,NavbarBrand} from "reactstrap"
import Menu from './components/Menu';
import { DISHES } from './shared/dishes';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    
    
    return (
      <div>
        <Navbar dark color="dark"> 
        <NavbarBrand href="/">Huzaifa</NavbarBrand>
       
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;

