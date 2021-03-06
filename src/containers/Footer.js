import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const FooterPizaa = Styled.div`
    margin-top: 40px;
    background: #191970;
    color: white;

`;
function Footer(props) {
  return (
    <FooterPizaa>
      <div className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-4 offset-1 col-sm-2"
              style={{ paddingTop: "30px" }}
            >
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/"
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                    }}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-7 col-sm-5" style={{ paddingTop: "30px" }}>
              <h5>Our Address</h5>
              <address>
                121, Clear Water Bay Road
                <br />
                Clear Water Bay, Kowloon
                <br />
                HONG KONG
                <br />
                <i className="fa fa-phone fa-lg"></i>: +852 1234 5678
                <br />
                <i className="fa fa-fax fa-lg"></i>: +852 8765 4321
                <br />
                <i className="fa fa-envelope fa-lg"></i>:{" "}
                <a
                  href="mailto:pizzamania@food.net"
                  style={{
                    color: "orange",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  pizzamania@food.net
                </a>
              </address>
            </div>
            <div className="col-12 col-sm-4 align-self-center">
              <div className="text-center">
                <a
                  style={{ color: "orange" }}
                  className="btn btn-social-icon btn-google"
                  href="http://google.com/+"
                >
                  Google
                  <i className="fa fa-google-plus"></i>
                </a>
                <a
                  style={{ color: "orange" }}
                  className="btn btn-social-icon btn-facebook"
                  href="http://www.facebook.com/profile.php?id="
                >
                  Facebook
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  style={{ color: "orange" }}
                  className="btn btn-social-icon btn-linkedin"
                  href="http://www.linkedin.com/in/"
                >
                  Linkedin
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  style={{ color: "orange" }}
                  className="btn btn-social-icon btn-twitter"
                  href="http://twitter.com/"
                >
                  Twitter
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  style={{ color: "orange" }}
                  className="btn btn-social-icon btn-google"
                  href="http://youtube.com/"
                >
                  Youtube
                  <i className="fa fa-youtube"></i>
                </a>
                <a
                  style={{ color: "orange" }}
                  className="btn btn-social-icon"
                  href="mailto:"
                >
                  Email
                  <i className="fa fa-envelope-o"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <p>© Copyright 2020 PizzaMania</p>
            </div>
          </div>
        </div>
      </div>
    </FooterPizaa>
  );
}

export default Footer;
