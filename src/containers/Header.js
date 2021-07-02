import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
  menu: state.menu,
});

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Navbar light expand="md" style={{ background: "#FFFAF2" }}>
        <img
          style={{ height: "40px", width: "40px" }}
          src="images/logo.webp"
          alt="logo"
        />
        <NavbarBrand style={{ color: "#010A3B", fontWeight: "bold" }}>
          <Link to="/" style={{ textDecoration: "none", marginLeft: "10px" }}>
            PizzaMania
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  marginLeft: "20px",
                  color: "#010A3B",
                  fontWeight: "bold",
                }}
              >
                Menu
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  marginLeft: "20px",
                  color: "#010A3B",
                  fontWeight: "bold",
                }}
              >
                About
              </Link>
            </NavItem>
          </Nav>
          <ButtonContainer>
            <span className="mr-2">
              <i className="fa fa-cart-plus"></i>
            </span>
            <NavbarText className="cartButton">
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "white" }}
              >
                my cart
                <span style={{ margin: "5px" }}>
                  {props.menu.cart.length === 0 ? null : props.menu.cart.length}
                </span>
              </Link>
            </NavbarText>
          </ButtonContainer>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
}
export default withRouter(connect(mapStateToProps)(Header));
