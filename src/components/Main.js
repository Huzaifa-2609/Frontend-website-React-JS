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
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders ,postFeedback } from '../redux/ActionCreator';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { actions } from "react-redux-form";
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = dispatch => ({
  
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  postFeedback : (firstname, lastname, telnum, email, agree, contactType, message)=>dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message))
});


class Main extends Component {
  constructor(props) {
    super(props);
  }
  onSelectDish = (dishid) => {
    this.setState({
      selectedDish: dishid,
    });
  };
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  render() {
    return (
      <div>
        <Header />
        <TransitionGroup>
        <CSSTransition key={window.location} classNames="page" timeout={300}>
        <Routes>
          <Route
            path="/home"
            element={
              <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}
              leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
              leaderLoading={this.props.leaders.isLoading}
              leaderErrMsg={this.props.leaders.errMess}
          />
            }
          />
          <Route exact path="/menu" element={<Menu dishes={this.props.dishes.dishes} />} />
          <Route exact path="/menu/:dishId" element={<DishWithId  isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess} postComment={this.props.postComment}  commentsErrMess={this.props.comments.errMess} dishes={this.props.dishes.dishes} comments={this.props.comments.comments}/>} />
          <Route path="/contactus" element={<Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>} />
          <Route path="/aboutus" element={<About isLoading={this.props.leaders.isLoading}
            errMess={this.props.leaders.errMess} leaders={this.props.leaders.leaders}/>} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);;
