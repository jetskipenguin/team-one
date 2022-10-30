import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, NavbarText
  } from 'reactstrap';


class NavigationBar extends Component {

    render() {
        return (
            <div>
                <Navbar>
                    <NavbarBrand style={{color: 'white'}} href="/">Oil and Gas In the United States</NavbarBrand>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink style={{color: 'white'}} href="/about">About</NavLink>
                            </NavItem>
                        <NavItem>
                            <NavLink style={{color: 'white'}} href="https://github.com/jetskipenguin/team-one">
                                GitHub
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;
