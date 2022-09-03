import React, { Component } from 'react';
import DishDetails from './DishDetails';
import { Navbar,NavbarBrand} from "reactstrap"
import Menu from './Menu';
import { DISHES } from '../shared/dishes';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dishes: DISHES,
          selectedDish: null,
        };
      }
      onSelectDish = (dishid) => {
        this.setState({
          selectedDish: dishid,
        });
      };
      render() {
        
        
        return (
          <div>
            <Navbar dark color="dark"> 
            <NavbarBrand href="/">Huzaifa</NavbarBrand>
            </Navbar>
            <Menu onClick={this.onSelectDish} dishes={this.state.dishes}/>
            {this.state.selectedDish && <DishDetails dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/>}
          </div>
        );
      }
}

export default Main;
