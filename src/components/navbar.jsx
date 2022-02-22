import "../styleComponents/navbar.css";
import React, { useState } from "react";
import {
  Navbar, NavbarBrand, NavbarToggler, Nav, NavLink, NavItem, Collapse, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, NavbarText
} from "reactstrap";


const Navbarr = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar id="nav" dark expand="md" fixed="top" full>
        <NavbarBrand href="/">Study Tool</NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">SEM 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>SEM 1</DropdownItem>
                <DropdownItem>SEM 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarr;