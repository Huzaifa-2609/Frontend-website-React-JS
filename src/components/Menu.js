import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";


const RenderMenuItem=({onClick,dish})=>{
  
  return(
  <div
          onClick={() => {
            onClick(dish.id);
          }}
          
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
  )
}

const  Menu=(props)=> {

    const menu = props.dishes.map((dish) => {
      return (
        <RenderMenuItem key={dish.id} dish={dish} onClick={props.onClick}/>
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

export default Menu;
