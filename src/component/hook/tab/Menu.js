import React, { useState } from 'react';
import { Button, Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';

function Menu(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(isOpen);

    return (
        <div className='header'>
          <Container>


           
      <Navbar expand="md">
         <NavbarBrand href="/">
      <img
        alt="logo"
        src="/logo-white.svg"
        style={{
          height: 40,
          width: 40
        }}
      />
      Reactstrap
    </NavbarBrand>
        <NavbarToggler Collapse navigation  onClick={toggle} />
        <Collapse isOpen={isOpen} navbar  >
          <Nav className="me-auto " navbar>
            <NavItem className="m-4">
              <NavLink href="/components/">HOME</NavLink>
            </NavItem>
            <NavItem className="m-4">
              <NavLink href="https://github.com/reactstrap/reactstrap">
               TOUR
              </NavLink>
            </NavItem  >
            <NavItem className="m-4">
              <NavLink href="https://github.com/reactstrap/reactstrap">
               BLOG
              </NavLink>
            </NavItem  >
            
          </Nav>
          <NavbarText>
            <div className='d-flex '>
            <Input className='me-2 form-control' /> <Button className='text-light border-light hover-bg-light btn btn-outline-success' >search</Button>

            </div>
          </NavbarText>
        </Collapse>
      </Navbar>
      </Container>
    </div>
    );
}

export default Menu;