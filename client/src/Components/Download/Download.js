import React, { Component } from "react";
import "./style.css";
import googlePlayBadge from "./img/google-play-badge.svg";
import appStoreBadge from "./img/app-store-badge.svg";

export class Download extends Component {
  render() {
    return (
      <section className="download bg-primary text-center" id="download">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2 className="section-heading">
                Discover the buzz around our school
              </h2>
              <p>
                We also have our school's app available on any mobile device!
                Download now to get started!
              </p>
              <div className="badges">
                <a className="badge-link" href="#">
                  <img src={googlePlayBadge} alt="" />
                </a>
                <a className="badge-link" href="#">
                  <img src={appStoreBadge} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Download;
