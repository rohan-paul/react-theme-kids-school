import React, { Component } from "react";
import "./style.css";
import Image from "./bg-01.jpg";
import CoverImage from "./contact-background.svg";

export class Contacts extends Component {
  render() {
    return (
      <div
        className="container-contact100"
        id="contact"
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${CoverImage})`,
          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "norepeat",
          backgroundSize: "cover",
          overflow: "hidden",
          position: "relative",
          margin: 0
        }}
      >
        <div
          className="contact100-map"
          id="google_map"
          data-map-x="40.722047"
          data-map-y="-73.986422"
          data-pin="./map-marker.png"
          data-scrollwhell={0}
          data-draggable={1}
        />
        <div className="wrap-contact100">
          <div
            className="contact100-form-title"
            style={{ backgroundImage: `url(${Image})` }}
          >
            <span className="contact100-form-title-1">Contact Us</span>
            <span className="contact100-form-title-2">
              Feel free to drop us a line below!
            </span>
          </div>
          <form className="contact100-form validate-form">
            <div
              className="wrap-input100 validate-input"
              data-validate="Name is required"
            >
              <span className="label-input100">Full Name:</span>
              <input
                className="input100"
                type="text"
                name="name"
                placeholder="Enter full name"
              />
              <span className="focus-input100" />
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <span className="label-input100">Email:</span>
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Enter email addess"
              />
              <span className="focus-input100" />
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Phone is required"
            >
              <span className="label-input100">Phone:</span>
              <input
                className="input100"
                type="text"
                name="phone"
                placeholder="Enter phone number"
              />
              <span className="focus-input100" />
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Message is required"
            >
              <span className="label-input100">Message:</span>
              <textarea
                className="input100"
                name="message"
                placeholder="Your Comment..."
                defaultValue={""}
              />
              <span className="focus-input100" />
            </div>
            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn">
                <span>
                  Submit
                  <i
                    className="fa fa-long-arrow-right m-l-7"
                    aria-hidden="true"
                  />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contacts;
