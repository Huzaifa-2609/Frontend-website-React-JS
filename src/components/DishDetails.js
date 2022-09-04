import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

const RenderComments = ({ comments }) => {
  return (
    <li className="mb-3" key={comments.id}>
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

const DishDetails = ({ dish }) => {
  return (
    dish && (
      <div className="container">
        <div className="row">
          <RenderDish dish={dish} />
          <div className="col-12 col-md-5 m-1">
            <h1>Comments</h1>
            <ul className="mt-2 list-inline">
              {dish.comments.map((comm) => {
                return <RenderComments comments={comm} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default DishDetails;
