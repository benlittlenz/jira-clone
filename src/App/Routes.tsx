import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import history from "../browserHistory";
import { Project } from "../Project";

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/project" />
      <Route path="/project" component={Project} />
    </Switch>
  </Router>
);

export default Routes;
