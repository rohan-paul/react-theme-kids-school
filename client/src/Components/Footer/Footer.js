import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./_footer.scss";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer-area section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-6 single-footer-widget">
                <h4>Top Achievements</h4>
                <ul>
                  <li>
                    <Link to="/">School's online services</Link>
                  </li>
                  <li>
                    <Link to="/">Student awards</Link>
                  </li>
                  <li>
                    <Link to="/">Online Tools</Link>
                  </li>
                  <li>
                    <Link to="/">Student Service</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 single-footer-widget">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <Link to="/">Games</Link>
                  </li>
                  <li>
                    <Link to="/">School Assets</Link>
                  </li>
                  <li>
                    <Link to="/">Sponsors</Link>
                  </li>
                  <li>
                    <Link to="/">Terms of Service</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 single-footer-widget">
                <h4>Our previous Year</h4>
                <ul>
                  <li>
                    <Link to="/">Games</Link>
                  </li>
                  <li>
                    <Link to="/">School Assets</Link>
                  </li>
                  <li>
                    <Link to="/">Sponsors</Link>
                  </li>
                  <li>
                    <Link to="/">Terms of Service</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 single-footer-widget">
                <h4>Resources</h4>
                <ul>
                  <li>
                    <Link to="/">Security Measures</Link>
                  </li>
                  <li>
                    <Link to="/">What Parents say about us</Link>
                  </li>
                  <li>
                    <Link to="/">Teachers</Link>
                  </li>
                  <li>
                    <Link to="/">Alumni</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 single-footer-widget">
                <h4>Newsletter</h4>
                <p>You can trust us. we only send promo offers,</p>
                <div className="form-wrap" id="mc_embed_signup">
                  <form target="_blank" method="get" className="form-inline">
                    <input
                      className="form-control"
                      name="EMAIL"
                      placeholder="Your Email Address"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Your Email Address '"
                      required
                      type="email"
                    />
                    <button className="click-btn btn btn-default text-uppercase">
                      subscribe
                    </button>
                    <div style={{ position: "absolute", left: "-5000px" }}>
                      <input
                        name="b_36c4fd991d266f23781ded980_aefe40901a"
                        tabIndex={-1}
                        defaultValue
                        type="text"
                      />
                    </div>
                    <div className="info" />
                  </form>
                </div>
              </div>
            </div>
            <div className="footer-bottom row align-items-center">
              <p className="footer-text m-0 col-lg-8 col-md-12">
                Copyright © | This template is made with
                {" React "}
                <i className="fa fa-heart-o" aria-hidden="true" />{" "}
              </p>
              <div className="col-lg-4 col-md-12 footer-social">
                <Link to="/">
                  <i className="fa fa-facebook" />
                </Link>
                <Link to="/">
                  <i className="fa fa-twitter" />
                </Link>
                <Link to="/">
                  <i className="fa fa-dribbble" />
                </Link>
                <Link to="/">
                  <i className="fa fa-behance" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
