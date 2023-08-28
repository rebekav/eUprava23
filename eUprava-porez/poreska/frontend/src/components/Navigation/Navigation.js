import React from "react";
import authService from "../../services/auth-service";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Navigation = () => {
  // const navigationLinks = navbarService.getAllowedNavbarLinks().map((navLink, index) => (
  //     <Link key={index} to={navLink.url} className={styles.link}">
  //         {navLink.text}
  //     </Link>
  // ));

  return (
    <Navbar collapseOnSelect expand="md" className="bg-primary text-dark m-0">
      <Container>
        <Link to="/" className={styles.brand}>
          PORESKA
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={styles.toggle}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {/*{navigationLinks}*/}
            <Link to="/gradjani-uplate" className={styles.link}>
              Uplate za gradjane
            </Link>
            <Link to="/uplate" className={styles.link}>
              <i>Uplate</i>
            </Link>
            <Link to="/nekretnine" className={styles.link}>
              <i>Nekretnine</i>
            </Link>
            <Link to="/gradjani" className={styles.link}>
              <i>Gradjani</i>
            </Link>
          </Nav>
          <Button
            size="sm"
            variant="outline-light"
            className="ml-4"
            onClick={authService.logout}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
