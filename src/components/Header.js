import React, { Component } from 'react'
import { Jumbotron, Navbar,NavbarBrand} from "reactstrap"
export default class Header extends Component {
  render() {
    return (
      <div>
         <Navbar dark color="dark"> 
            <NavbarBrand href="/">Huzaifa</NavbarBrand>
            </Navbar>
            <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
      </div>
    )
  }
}
