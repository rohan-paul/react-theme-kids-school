import React, { Component } from "react";
import "./style.css";
import * as Scroll from "react-scroll";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              {/*<FontAwesomeIcon icon="bars" size="3x" color="pink" />

              */}
              <i className="fas fa-bars" />
            </button>
            <i className="fas fa-bars">
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#download">
                      Download
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </i>
          </div>
          <i className="fas fa-bars" />
        </nav>
        <i className="fas fa-bars" />
      </div>
    );
  }
}

export default NavBar;
/*
1>
Explanation for navbar-expand-lg - https://react-bootstrap.github.io/components/navbar/
Use the expand prop to allow for collapsing the Navbar at lower breakpoints.

A) https://medium.com/coder-grrl/the-guide-to-customising-the-bootstrap-4-navbar-i-wish-id-had-6-months-ago-7bc6ce0e3c71

navbar-expand-lg is when the collapsed navbar comes into effect, you can change this to sm md or xs to control this, or you can remove it completely so it’s always collapsed

B) https://www.bootstrapdash.com/bootstrap-4-tutorial/navbar/ - Navbar is a wrapper that is used to contain and position navigation element, branding and other elements like a form into a header.

Navbar is responsive by default. That it collapses on a smaller viewport and aligns horizontally on larger viewports. This behavior can be overridden

You can create a navbar using classes .navbar with .navbar-expand-* and the contents wrapped inside it.

*/
