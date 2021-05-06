import React from 'react';
import {Nav, NavIcon, NavLink, Bars} from "./NavbarElements.js";

const Navbar = ({toggle}) => {
    return (
      <>
        <Nav>
          <NavLink to="/">UxG Pizzas</NavLink>
          <NavIcon onClick={toggle}>
              <p>Menu</p>
              <Bars />
          </NavIcon>
        </Nav>
      </>
    );
}

export default Navbar;

