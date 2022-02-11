import React from "react";
import { Route, Redirect, useRouteMatch, useHistory } from "react-router-dom";

import { ProjectLeftNav } from "../components/LeftNav";
import { ProjectSidebar } from "../components/Sidebar/Sidebar";
import { ProjectPage } from "./Project.styled";
import { Settings } from "./Settings";

export const Project = () => {
  const match = useRouteMatch();
  const history = useHistory();
  return (
    <ProjectPage>
      <ProjectLeftNav />
      <ProjectSidebar />

      <Route path={`${match.path}/settings`} render={() => <Settings />} />
    </ProjectPage>
  );
};
