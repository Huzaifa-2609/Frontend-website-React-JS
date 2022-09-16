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
import { addComment, fetchDishes } from '../redux/ActionCreator';
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())}

});


class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }
  onSelectDish = (dishid) => {
    this.setState({
      selectedDish: dishid,
    });
  };
  componentDidMount() {
    this.props.fetchDishes();
  }
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route
            path="/home"
            element={
              <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
            }
          />
          <Route exact path="/menu" element={<Menu dishes={this.props.dishes.dishes} />} />
          <Route exact path="/menu/:dishId" element={<DishWithId  isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess} addComment={this.props.addComment} dishes={this.props.dishes.dishes} comments={this.props.comments}/>} />
          <Route path="/contactus" element={<Contact/>} />
          <Route path="/aboutus" element={<About leaders={this.props.leaders}/>} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);;
