import React, { Component } from "react";
import "./style.css";
import demoScreen1 from "../../Assets/Images/children.jpg";
import ParticleComp from "../ElevatorSpeechComp/ParticleComp";

export class TopSection extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="masthead">
          <ParticleComp />
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-5 my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5" style={{ fontWeight: 200 }}>
                    Tatanagar International School is the school of the new age
                    where we provide the perfect foundation to the young kids
                    preparing them for the next phase of their life!
                  </h1>
                  <a
                    href="#download"
                    className="btn btn-primary btn-xl js-scroll-trigger"
                  >
                    Start here to get your kids evaluated
                  </a>
                </div>
              </div>
              <div className="col-lg-7 my-auto">
                <img src={demoScreen1} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default TopSection;
