import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import history from "./history";
import { Route, BrowserRouter, Switch, Router, Link } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import TopSection from "./Components/TopSection/TopSection";
import Download from "./Components/Download/Download";
import Features from "./Components/Features/Features";
import Login from "./Components/Login/Login";
import Contacts from "./Components/Contacts/Contacts";
import GalleryPhotos from "./Components/Gallery/GalleryPhotos";
import { ElevatorSpeechComp } from "./Components/ElevatorSpeechComp/ElevatorSpeechComp";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faMobileAlt,
  faChild,
  faDesktop,
  faLightbulb,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faBars,
  faMobileAlt,
  faChild,
  faDesktop,
  faLightbulb,
  faGraduationCap
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarShrink: ""
    };
  }

  // I have to call my function on scroll event - and I should do that within componentDidMount()
  // https://developer.mozilla.org/en-US/docs/Web/Events/scroll - The 'scroll' event fires when the document view or an element has been scrolled.
  //
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // When the current has been vertically scrolled more than 100 pixels  from the upper left corner of the window, make the navBarShrink get assigned the value 'navbar-shrink'
  handleScroll = () => {
    const domNode = ReactDOM.findDOMNode(this.navEl);
    const nbs = window.pageYOffset > 100 ? "navbar-shrink" : "";
    this.setState({
      navBarShrink: nbs
    });
  };

  render() {
    // const nbs = this.state ? this.state.navBarShrink : "";

    return (
      <div>
        <BrowserRouter>
          <Router history={history}>
            <div>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <div>
                      <NavBar navBarShrink={this.state.navBarShrink} />
                      <TopSection />
                      <Features />
                      <ElevatorSpeechComp />
                      <GalleryPhotos />
                      <Download />
                      <Contacts />
                      <Footer />
                    </div>
                  )}
                />
                <Route exact path="/login" component={Login} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Router>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

/* 1> Within the switch component at the root  "/" I am rendering a multiple components to the same route.
https://stackoverflow.com/questions/37342997/render-multiple-components-in-react-router

https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md#render-func

2>  Notes around handleScroll() Function >> With this function basically I am updating the style of this component onScroll in React.js

A> https://gist.github.com/koistya/934a4e452b61017ad611

B> https://www.w3schools.com/jsref/prop_win_pagexoffset.asp -
The pageXOffset and pageYOffset properties returns the pixels the current document has been scrolled from the upper left corner of the window, horizontally and vertically.

C> https://stackoverflow.com/questions/29725828/update-style-of-a-component-onscroll-in-react-js
 */
