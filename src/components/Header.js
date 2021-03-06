import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import "../css/navbar.css";
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        

        this.state = {
            isNavOpen: true,
           
        };
    }

    toggleNav() {
        this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }

   

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md" background-color=" #232f3e">
                    <div className="container12">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">RISK CALCULATOR     </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span>TEAM
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/CALCULATOR">
                                    <span className="fa fa-list fa-lg"></span> CALCULATOR
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/certification">
                                    <span className="fa fa-address-card fa-lg"></span> APPRICIATION
                                </NavLink>
                            </NavItem>
                        </Nav>
                       
                    </Collapse>
                            </div>
                            </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;