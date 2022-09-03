import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class Menu extends Component {
  render() {
    console.log("render")
    const menu = this.props.dishes.map((dish) => {
      return (
        <div
          onClick={() => {
            this.props.onClick(dish.id);
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

      </div>
    );
  }
}

export default Menu;
