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
                      <h3>Device Mockups</h3>
                      <p className="text-muted">
                        Ready to use HTML/CSS device mockups, no Photoshop
                        required!
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="icon-camera text-primary" />
                      <h3>Flexible Use</h3>
                      <p className="text-muted">
                        Put an image, video, animation, or anything else in the
                        screen!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="icon-present text-primary" />
                      <h3>Free to Use</h3>
                      <p className="text-muted">
                        As always, this theme is free to download and use for
                        any purpose!
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="icon-lock-open text-primary" />
                      <h3>Open Source</h3>
                      <p className="text-muted">
                        Since this theme is MIT licensed, you can use it
                        commercially!
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
