import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Button, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

// Commentform Component  starts
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };
  handleSubmit = (values) => {
    alert("the current state is " + JSON.stringify(values));
    console.log("the current state is " + JSON.stringify(values));
  };

  render() {
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !val || val.length <= len;
    const minLength = (len) => (val) => val && val.length >= len;
    return (
      <div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm
              className="container"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <Row>
                <Label htmlFor="rating">Rating</Label>
                <Control.select
                  className="form-control"
                  model=".rating"
                  id="rating"
                  type="select"
                  name="rating"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Row>
              <Row className="form-group" md={10}>
                <Label htmlFor="author">Your Name</Label>
                <Control.text
                  className="form-control"
                  model=".author"
                  id="author"
                  name="author"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Row>
              <Row className="form-group">
                <Label htmlFor="message">Comment</Label>
                <Control.textarea
                  model=".message"
                  id="message"
                  name="message"
                  rows="6"
                  className="form-control"
                />
              </Row>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
      </div>
    );
  }
}
// Commentform component ends

// Dish Details working start
const RenderComments = ({ comments }) => {
  return (
    <>
      <h1>Comments</h1>
      {comments.map((comm) => {
        return (
          <ul className="mt-2 list-unstyled">
            <li className="mb-3">
              <h5>{comm.comment}</h5>
              <h5>
                <span> --{comm.author}</span>,{" "}
                <span className="mx-1">
                  {new Intl.DateTimeFormat("en-US").format(
                    Date.parse(comm.date)
                  )}
                </span>
              </h5>
            </li>
          </ul>
        );
      })}
      <CommentForm />
    </>
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
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
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
            <RenderComments comments={comments} />;
          </div>
        </div>
      </div>
    )
  );
};

export default DishDetails;
