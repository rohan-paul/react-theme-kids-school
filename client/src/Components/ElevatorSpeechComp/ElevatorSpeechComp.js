import React from "react";
import "./style.css";
import ParticleComp from "./ParticleComp";

export const ElevatorSpeechComp = props => {
  return (
    <section className="cta">
      <ParticleComp />
      <div className="cta-content">
        <div className="container">
          <h2>
            Time to enter into the
            <br />
            Exciting World of Education
          </h2>
          <a
            href="#contact"
            className="btn btn-outline btn-xl js-scroll-trigger"
          >
            Let's Get Started!
          </a>
        </div>
      </div>
      <div className="overlay" />
    </section>
  );
};
