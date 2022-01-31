import React, { Fragment } from 'react';

import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import { ProjectSidebar } from '../components/Sidebar/Sidebar';

import './fontStyles.css';
import { ProjectLeftNav } from '../components/LeftNav';

const App = () => (
  <Fragment>
    <NormalizeStyles />
    <BaseStyles />
    <ProjectLeftNav />
    <ProjectSidebar />
  </Fragment>
);

export default App;
