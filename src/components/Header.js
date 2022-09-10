import React, { Component, createRef } from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Collapse, Form, FormGroup, Input, Jumbotron, Label, Modal, ModalBody, ModalHeader, Nav, Navbar,NavbarBrand, NavbarToggler, NavItem} from "reactstrap"
export default class Header extends Component {
    constructor(props){
        super(props);
        this.username=createRef()
        this.password=createRef()
        this.remember=createRef()
        this.state={
            isNavOpen:false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }
    toggleNav=()=>{
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        })
    }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.current.value + " Password: " + this.password.current.value
            + " Remember: " + this.remember.current.checked);
        event.preventDefault();

    }
    // componentDidMount(){
    //     this.username.current.focus();
    //     this.password.current.focus();
    //     this.remember.current.focus();
    // }
  render() {
    return (
      <div>
         <Navbar dark color="dark" expand={"md"}> 
            
            <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><i className=" fa fa-light fa-folder-user"></i> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
            </div>
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
       <Modal  isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader
                     toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={this.username} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={this.password} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={this.remember}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    
                    </ModalBody>
                </Modal>
      </div>
    )
  }
}
