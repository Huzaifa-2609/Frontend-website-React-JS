import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardText, CardTitle } from "reactstrap";

const RenderComments = ({ comments }) => {
  return (
    <li className="mb-3" >
      <h5>{comments.comment}</h5>
      <h5>
        <span> --{comments.author}</span>,{" "}
        <span className="mx-1">
          {new Intl.DateTimeFormat("en-US").format(Date.parse(comments.date))}
        </span>
      </h5>
    </li>
  );
};

const RenderDish = ({ dish }) => {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card
        style={{
          width: "100%",
        }}
      >
        <img alt={dish.name} src={dish.image} />
        <CardBody>
          <CardTitle tag="h5">{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

const DishDetails = ({ dish, comments }) => {
  return (
    dish && (
      <div className="container">
        <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>                
                </div>
        <div className="row">
          <RenderDish dish={dish} />
          <div className="col-12 col-md-5 m-1">
            <h1>Comments</h1>
            <ul className="mt-2 list-inline">
              {comments.map((comm) => {
                return <RenderComments key={comm.id} comments={comm} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default DishDetails;
