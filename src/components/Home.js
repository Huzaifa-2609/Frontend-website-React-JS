import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Loading } from "./Loading";

const RenderCard = ({ item , isLoading, errMess}) => {
  if (isLoading) {
    return(
            <Loading />
    );
}
else if (errMess) {
    return(
            <h4>{errMess}</h4>
    );
}
else 
  return (
    <Card
      style={{
        width: "100%",
      }}
    >
      <img alt={item.name} src={item.image} />
      <CardBody>
        <CardTitle tag="h5">{item.name}</CardTitle>

        {item.designation && (
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {item.designation}
          </CardSubtitle>
        )}

        <CardText>
          {item.description}
        </CardText>
      </CardBody>
    </Card>
  );
};
const Home = (props) => {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
        <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}  />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
};

export default Home;
