import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1225912705/photo/night-view-of-city-lights-in-front-of-marble-square-xuzhou-china.jpg?s=1024x1024&w=is&k=20&c=fz2xkO8lb873jeIpehRyb-tFeaaODmRjpMCbcCl2Tas=')",
      }}
    >
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        className="rounded-pill mx-auto w-75 d-flex justify-content-center align-items-center"
      >
        <Navbar.Brand as={Link} to="/">
          ETHpay
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav justify-content-center align-items-center">
          <Nav className="ml-auto justify-content-center align-items-center">
            
           
            <Nav.Link as={Link} to="/funding">
              Fund Raisings
            </Nav.Link>
            <Nav.Link as={Link} to="/form">
              Raise Funds
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <style jsx>{`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translate3d(0, -10%, 0);
            }
            to {
              opacity: 1;
              transform: none;
            }
          }

          .navbar {
            animation: fadeInDown 1s ease;
          }

          .rounded-pill {
            border-radius: 50px; /* Adjust the border-radius as needed */
          }

          .w-75 {
            width: 75%; /* Adjust the width as needed */
          }
        `}</style>
      </Navbar>
    </div>
  );
};

export default NavBar;
