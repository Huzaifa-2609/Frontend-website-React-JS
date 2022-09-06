import React from "react";
import { useParams } from "react-router-dom";
import DishDetails from "./DishDetails";

const DishWithId = ({dishes, comments}) => {
    const {dishId}= useParams();
    return(
        <DishDetails dish={dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]} 
          comments={comments.filter((comment) => comment.dishId === parseInt(dishId,10))} />
    );
  };
  export default DishWithId;