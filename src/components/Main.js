import React, { Component } from 'react';
import Menu from './Menu';
import { DISHES } from '../shared/dishes';
import Header from './Header';
import Footer from './Footer';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './Home';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dishes: DISHES,
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
            <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/menu" element={<Menu dishes={this.state.dishes}/>}/>
            <Route
        path="*"
        element={<Navigate to="/home" replace />}
    />
            
            </Routes>
            {/* <DishDetails dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/> */}
            <Footer/>
          </div>
        );
      }
}

export default Main;
