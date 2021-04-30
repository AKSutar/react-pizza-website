import React from 'react';
import {Nav, NavIcon, NavLink, Bars} from "./NavbarElements.js";

const Navbar = () => {
    return (
      <>
        <Nav>
          <NavLink to="/">UxG Pizzas</NavLink>
          <NavIcon>
              <p>Menu</p>
              <Bars />
          </NavIcon>
        </Nav>
      </>
    );
}

export default Navbar;

