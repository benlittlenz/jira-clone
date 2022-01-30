import React, { Fragment } from 'react';

import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import { ProjectSidebar } from '../components/Sidebar';

const App = () => (
  <Fragment>
    <NormalizeStyles />
    <BaseStyles />
    <ProjectSidebar />
  </Fragment>
);

export default App;
