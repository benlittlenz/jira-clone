import React, { Fragment } from "react";

import BaseStyles from "./BaseStyles";
import NormalizeStyles from "./NormalizeStyles";
import "./fontStyles.css";
import Routes from "./Routes";

const App = () => (
  <Fragment>
    <NormalizeStyles />
    <BaseStyles />
    <Routes />
  </Fragment>
);

export default App;
