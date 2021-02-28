import React from 'react';
import { Link } from 'react-router-dom';
import './app-header.scss';
import { Navbar, Nav } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const AppHeader = ({ total = 5 }) => (
  <div className="header-bg">
    <Navbar className="d-flex justify-content-between px-4">
      <Navbar.Brand href="#home font">GoodFood</Navbar.Brand>
      <Nav>
        <Link to="/menu/" className="mr-4">
          Menu
        </Link>
        <Link to="/cart/" className="">
          <FaShoppingCart className="mr-1" />
          Total: &nbsp;
          {total}
          $
        </Link>
      </Nav>
    </Navbar>
    <div className="header-wrapper w-50 mx-4 p-5">
      <h1 className="">
        We make
        <br />
        an excellent
        <br />
        dishes
      </h1>
      <p className="mt-4">
        Let us guide you through
        the thousands of tastes
        and try something you never
        ate before. Experience the
        art of cooking...
      </p>
    </div>

  </div>
);

export default AppHeader;
