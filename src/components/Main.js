import React, { Component } from "react";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import DishWithId from "./DishWithId";
import About from "./About";
import { connect } from 'react-redux';
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
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
                dishes={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={
                  this.props.promotions.filter((promo) => promo.featured)[0]
                }
                leader={
                  this.props.leaders.filter((leader) => leader.featured)[0]
                }
              />
            }
          />
          <Route exact path="/menu" element={<Menu dishes={this.props.dishes} />} />
          <Route exact path="/menu/:dishId" element={<DishWithId dishes={this.props.dishes} comments={this.props.comments}/>} />
          <Route path="/contactus" element={<Contact/>} />
          <Route path="/aboutus" element={<About leaders={this.props.leaders}/>} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);;
