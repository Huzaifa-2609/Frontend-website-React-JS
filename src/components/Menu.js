import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import DishDetails from "./DishDetails";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
    console.log("constructor")
  }
  onSelectDish = (dish) => {
    this.setState({
      selectedDish: dish,
    });
  };
  componentDidMount(){
    console.log("huzaifa")
  }
  renderDish = (dish) => {
    if (dish != null) {
      return (
        <DishDetails dish={dish}/>
      );
    } else {
      return;
    }
  };

  render() {
    console.log("render")
    const menu = this.props.dishes.map((dish) => {
      return (
        <div
          onClick={() => {
            this.onSelectDish(dish);
          }}
          key={dish.id}
          className="col-12 col-md-5 m-1"
        >
          <Card
            style={{
              width: "100%",
            }}
          >
            <CardImg alt={dish.name} src={dish.image} />
            <CardImgOverlay>
              <CardTitle className="text-dark" dark={"true"} tag="h5">
                {dish.name}
              </CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div>
        <div className="container">
          <div className="row">{menu}
          </div>
        </div>
        <div className="container">
          {this.renderDish(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Menu;
