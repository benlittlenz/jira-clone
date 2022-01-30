import React from 'react';
import { Sidebar, ProjectInfo, ProjectTexts, ProjectName, ProjectCategory } from "./Sidebar.styled"

export const ProjectSidebar = () => {
  return (
    <Sidebar>
      <ProjectInfo>
        <ProjectTexts>
          <ProjectName>Jira Clone</ProjectName>
          <ProjectCategory>Software project</ProjectCategory>
        </ProjectTexts>
      </ProjectInfo>
    </Sidebar>
  )
}
