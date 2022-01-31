import React, { Fragment } from 'react';

import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import './fontStyles.css';
import Routes from './Routes';


const App = () => (
  <Fragment>
    <NormalizeStyles />
    <BaseStyles />
    <Routes />
  </Fragment>
);

export default App;
