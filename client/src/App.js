import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import history from "./history";
import { Route, BrowserRouter, Switch, Router, Link } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faBars);

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Router history={history}>
            <div>
              <Switch>
                <Route exact path="/" component={NavBar} />
              </Switch>
            </div>
          </Router>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
