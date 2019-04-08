import React, { Component } from "react";
import "./style.css";
import * as Scroll from "react-scroll";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuShow: false
    };
  }

  // From react-scroll doc - https://github.com/fisshy/react-scroll
  componentDidMount() {
    Events.scrollEvent.register("begin", () => {
      console.log("begin", arguments);
      this.closeMenu();
    });

    Events.scrollEvent.register("end", () => {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvents.remove("begin");
    Events.scrollEvents.remove("end");
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  toggleShow = () => {
    this.setState(
      {
        menuShow: !this.state.menuShow
      },
      () => {
        console.log("VALUE OF MENU SHOW IS ", this.state.menuShow);
      }
    );
  };

  closeMenu = () => {
    if (this.state.menuShow) {
      this.setState({
        menuShow: false
      });
    }
  };

  render() {
    const show = this.state.menuShow ? "show" : "";
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${
          this.props.navBarShrink
        }`}
        id="mainNav"
      >
        <div className="container">
          <a
            onClick={this.scrollToTop}
            className="navbar-brand js-scroll-trigger"
            href="#page-top"
          >
            School Homepage Section
          </a>
          <button
            onClick={this.toggleShow.bind(this)}
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <FontAwesomeIcon icon="bars" size="2x" color="black" />
          </button>

          <div
            className={`collapse navbar-collapse ${show}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link js-scroll-trigger"
                  to="download"
                  spy={true}
                  smooth="eastInOutQuart"
                  duration={1000}
                >
                  Download
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link js-scroll-trigger"
                  to="features"
                  spy={true}
                  smooth="easeInOutQuart"
                  duration={1000}
                >
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link js-scroll-trigger"
                  to="contact"
                  spy={true}
                  smooth="easeInOutQuart"
                  duration={1000}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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

2> Explanation on the react-scroll package from - https://scotch.io/tutorials/implementing-smooth-scrolling-in-react

- activeClass - class applied when element is reached
- to - target to scroll to
- spy - make Link selected when scroll is at its targets position
- smooth - animate the scrolling
- offset - scroll additional px (like padding)
- duration - time of the scroll animation, can be a number or a function

The "to" property is the most important part as it tells the component which element to scroll to. In this case, this will be each of our sections.

With the *offset *property, you can define an additional amount of scrolling to perform to get to each section.

*Duration* is pretty self-explanatory, and spy and active class we will come back to in a minute.

Here's an example of the properties that we will use for each Link component. The only difference between them will be the "to" property as they each point to a different section.

<Link
    activeClass="active"
    className="nav-link js-scroll-trigger"
    to="download"
    spy={true}
    smooth="easeInOutQuart"
    duration={1000}
>

Styling Active Links - The active class property allows us to define a class to apply to the Link component when it's "to" element is active. A Link is considered active if it's "to" element is in view near the top of the page. This can be triggered by clicking on the link itself or by scrolling down to the section manually.
To check this in action, I can open up the dev tools and inspect a link. When I clicked on that link or scrolled to the bottom of the page myself manually, notice that the "active" class is in fact applied.

To take advantage of this, we can create an active class and add an underline to the link. You can add this bit of css in style.css file

#mainNav .navbar-nav > li > a.active {
  color: #fdcc52 !important;
  border-bottom: 1px solid #333;
  background-color: transparent;
}
#mainNav .navbar-nav > li > a.active:hover {
  background-color: transparent;
}

Now, I should see the appropriate link is underlined.


this package also provides some functions that can be called directly like "scrollToTop", "scrollToBottom", etc. as well as various events that you can handle. Typically, the application logo in a navbar should bring the user to the home page or the top of the current page. So, I added a click handler to the navbar brand image to call scroll the user back to the top of the page.

scrollToTop() {
    scroll.scrollToTop();
  }
With this, you should be able to scroll down on the page, click the logo in the navbar, and be taken back to the top of the page

*/
