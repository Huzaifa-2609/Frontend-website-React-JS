import React, { Component } from "react";
import Menu from "./Menu";
import { DISHES } from "../shared/dishes";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import { LEADERS } from "../shared/leader";
import { PROMOTIONS } from "../shared/promotions";
import { COMMENTS } from "../shared/comments";
import Contact from "./Contact";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      leader: LEADERS,
      promotion: PROMOTIONS,
      comments: COMMENTS,
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
        <Header />
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                dishes={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={
                  this.state.promotion.filter((promo) => promo.featured)[0]
                }
                leader={
                  this.state.leader.filter((leader) => leader.featured)[0]
                }
              />
            }
          />
          <Route path="/menu" element={<Menu dishes={this.state.dishes} />} />
          <Route path="/contactus" element={<Contact/>} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        {/* <DishDetails dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
