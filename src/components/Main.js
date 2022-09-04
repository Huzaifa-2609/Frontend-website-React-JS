import React, { Component } from 'react';
import DishDetails from './DishDetails';
import Menu from './Menu';
import { DISHES } from '../shared/dishes';
import Header from './Header';
import Footer from './Footer';

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
            <Header/>
            <Menu onClick={this.onSelectDish} dishes={this.state.dishes}/>
            <DishDetails dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/>
            <Footer/>
          </div>
        );
      }
}

export default Main;
