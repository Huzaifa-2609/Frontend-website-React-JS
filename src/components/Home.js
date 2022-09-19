import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./Loading";
import { FadeTransform } from 'react-animation-components';

const RenderCard = ({ item , isLoading, errMess}) => {
  console.log(item)
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
    <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
    <Card
      style={{
        width: "100%",
      }}
    >
      <img alt={item.name} src={baseUrl+ item.image} />
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
  </FadeTransform>
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
        <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} isLoading={props.leaderLoading} errMess={props.leaderErrMsg} />
        </div>
      </div>
    </div>
  );
};

export default Home;
