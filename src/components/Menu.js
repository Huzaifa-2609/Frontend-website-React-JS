import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Media } from 'reactstrap';

class Menu extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            selectedDish:null,
        };
    }
    onSelectDish=(dish)=>{
        this.setState({
            selectedDish:dish,
        })
    }
    renderDish=(dish)=>{
        if (dish!=null){
            return(
                 <Media tag="li">
                  <Media left middle>
                      <Media object src={dish.image} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                  </Media>
                </Media> 
            )
        }
        else{
            return;
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div onClick={()=>{this.onSelectDish(dish)}} key={dish.id} className="col-12 col-md-4 m-1">
                {/* <Media tag="li">
                  <Media left middle>
                      <Media object src={dish.image} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                  </Media>
                </Media> */}
                <Card 
  style={{
    width: '100%'
  }}
>
  <CardImg
    alt="Sample"
    src={dish.image}
  />
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
                    <div className="row">
                            {menu}
                    </div>
                </div>
                <div className="container m-3">
                {this.renderDish(this.state.selectedDish)};
                </div>
            </div>
        );
    }
}

export default Menu;
