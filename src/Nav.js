// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// import {
//     Container, Row, Col, Form, Input, Button, Navbar, Nav,
//     NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
//     DropdownToggle, DropdownMenu, DropdownItem, NavbarText
//   } from 'reactstrap';


// class NavigationBar extends Component {

//     render() {
//         return (
//             <div>
//                 <Navbar>
//                     <NavbarBrand style={{color: 'white'}} href="/">Oil and Gas In the United States</NavbarBrand>
//                     <Nav className="me-auto" navbar>
//                         <NavItem>
//                             <NavLink style={{color: 'white'}} href="/about">About</NavLink>
//                             </NavItem>
//                         <NavItem>
//                             <NavLink style={{color: 'white'}} href="https://github.com/jetskipenguin/team-one">
//                                 GitHub
//                             </NavLink>
//                         </NavItem>
//                     </Nav>
//                 </Navbar>
//             </div>
//         );
//     }
// }

// export default NavigationBar;

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">Oil and Gas Usage In the United States</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/jetskipenguin/team-one">GitHub</NavLink>
            </NavItem>
            <NavItem>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
