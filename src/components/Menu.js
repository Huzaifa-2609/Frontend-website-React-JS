import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const RenderMenuItem = ({ onClick, dish }) => {
  return (
    <div
      className="col-12 col-md-5 m-1"
    >

      <Card
        style={{
          width: "100%",
        }}
      >
        <Link to={`/menu/${dish.id}`}>
        <CardImg alt={dish.name} src={dish.image} />
        <CardImgOverlay>
          <CardTitle className="text-dark" dark={"true"} tag="h5">
            {dish.name}
          </CardTitle>
        </CardImgOverlay>
        </Link>
      </Card>
    </div>
  );
};

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return <RenderMenuItem key={dish.id} dish={dish}/>;
  });
  return (
    <div>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    </div>
  );
};

export default Menu;
