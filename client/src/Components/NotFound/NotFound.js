import React, { Component } from "react";
import "./NotFound.css";

export default class NotFound extends Component {
  render() {
    return (
      <div className="bg-purple">
        <div className="stars">
          <div className="custom-navbar">
            <div className="brand-logo">
              <img
                src={require("./img/logo.png")}
                style={{ width: "80px" }}
                alt=""
              />
            </div>
            <div className="navbar-links">
              <ul>
                <li>
                  <a
                    href="/dashboard/imports"
                    rel="noopener noreferrer"
                    className="btn-request"
                    //target="_blank"
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="central-body">
            <img
              className="image-404"
              src={require("./img/404.svg")}
              width="300px"
              alt=""
            />
            <a
              href="/dashboard/imports"
              rel="noopener noreferrer"
              className="btn-go-home"
              //target="_blank"
            >
              GO BACK HOME
            </a>
          </div>
          <div className="objects">
            <img
              className="object_rocket"
              src={require("./img/rocket.svg")}
              width="40px"
              alt=""
            />
            <div className="earth-moon">
              <img
                className="object_earth"
                src={require("./img/earth.svg")}
                width="100px"
                alt=""
              />
              <img
                className="object_moon"
                src={require("./img/moon.svg")}
                width="80px"
                alt=""
              />
            </div>
            <div className="box_astronaut">
              <img
                className="object_astronaut"
                src={require("./img/astronaut.svg")}
                width="140px"
                alt=""
              />
            </div>
          </div>
          <div className="glowing_stars">
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
          </div>
        </div>
      </div>
    );
  }
}
