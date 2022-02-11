import React from "react";
import { useRouteMatch } from "react-router-dom";

import { Icon } from "../Icon/Index";

import {
  Sidebar,
  ProjectInfo,
  ProjectTexts,
  ProjectName,
  ProjectCategory,
  LinkItem,
  LinkText,
} from "./Sidebar.styled";

export const ProjectSidebar = () => {
  const match = useRouteMatch();
  return (
    <Sidebar>
      <ProjectInfo>
        <ProjectTexts>
          <ProjectName>Jira Clone</ProjectName>
          <ProjectCategory>Software project</ProjectCategory>
        </ProjectTexts>
      </ProjectInfo>
      {renderLinkItem({
        match,
        text: "Kanban Board",
        iconType: "board",
        path: "/board",
      })}
      {renderLinkItem({
        match,
        text: "Project settings",
        iconType: "settings",
        path: "/settings",
      })}
    </Sidebar>
  );
};

interface RenderLinkProps {
  match: any;
  text: string;
  iconType: string;
  path: string;
}

const renderLinkItem = ({ match, text, iconType, path }: RenderLinkProps) => {
  const linkItemProps: Record<string, string | boolean> = {
    as: "a",
    href: true,
    target: `${match.path}${path}`,
  };

  return (
    <LinkItem {...linkItemProps}>
      <Icon type={iconType} />
      <LinkText>{text}</LinkText>
    </LinkItem>
  );
};
