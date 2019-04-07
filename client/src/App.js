import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import history from "./history";
import { Route, BrowserRouter, Switch, Router, Link } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Download from "./Components/Download/Download";
import NotFound from "./Components/NotFound/NotFound";
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
                <Route
                  exact
                  path="/"
                  render={props => (
                    <div>
                      <NavBar />
                      <Download />
                    </div>
                  )}
                />
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

/* Within the switch component at the root  "/" I am rendering a multiple components to the same route.
https://stackoverflow.com/questions/37342997/render-multiple-components-in-react-router

https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md#render-func
 */

/*
<BrowserRouter>
          <Router history={history}>
            <div>
              <Switch>
                <Route exact path="/" component={Download} />
                <Route exact path="/" component={NavBar} />
              </Switch>
            </div>
          </Router>
        </BrowserRouter>
*/
