import React, { Component } from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";


class DishDetails extends Component {
  render() {
    const { dish } = this.props;
    const comments= dish.comments;

    return (
        <div className="container">
      <div className="row">
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
        <div className="col-12 col-md-5 m-1">
            <h1>Comments</h1>
        <ul className="mt-2 list-inline">
            { comments.map((comm)=>{
           return( <li className="mb-3" key={comm.id}>
                <h5>{comm.comment}</h5>
                <h5><span> --{comm.author}</span>, <span className="mx-1">{new Intl.DateTimeFormat('en-US').format( Date.parse(comm.date))}</span></h5>
            </li>)
            })
            }
        </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default DishDetails;
