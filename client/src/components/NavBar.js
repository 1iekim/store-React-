import React, { useContext } from "react";
import { Context } from "..";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTER } from "../utils/consts";

const NavBar = () => {
  const { user } = useContext(Context);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTER}>
          КупиДевайс
        </NavLink>
        <Nav className="ml-auto" style={{ color: "white" }}>
          <Button variant="outline-light">Авторизация</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
