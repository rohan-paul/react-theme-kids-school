import React, { Component } from "react";
import "./style.css";
import "simple-line-icons/css/simple-line-icons.css";
import demoScreen1 from "../../Assets/Images/sunset.png";

export class Features extends Component {
  render() {
    return (
      <section className="features" id="features">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Lots of Learning with Plenty of Fun</h2>
            <p className="text-muted">
              Check out what you can do with this app theme!
            </p>
            <hr />
          </div>
          <div className="row">
            <div className="col-lg-5 my-auto">
              <img src={demoScreen1} className="img-fluid" alt="" />
            </div>
            <div className="button" />
            <div className="col-lg-7 my-auto">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="icon-screen-smartphone text-primary" />
                      <h3>We love technology</h3>
                      <p className="text-muted">
                        Out mobile app, is always updated with your kids
                        progress and for many other information like
                        home-assignments
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="icon-camera text-primary" />
                      <h3>Always on</h3>
                      <p className="text-muted">
                        We provide video chatting facility between students and
                        parents at the time when needed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="icon-present text-primary" />
                      <h3>Gifts for new students</h3>
                      <p className="text-muted">
                        We welcome our new students with lots of gift an
                        exciting events
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="icon-lock-open text-primary" />
                      <h3>Unlock the Future</h3>
                      <p className="text-muted">
                        We prepare our students right from day zero to make them
                        ready for the next phase of their life
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
