import { ProjectLeftNav } from '../components/LeftNav';
import { ProjectSidebar } from '../components/Sidebar/Sidebar';
import { ProjectPage } from './Project.styled';

export const Project = () => {
  return (
    <ProjectPage>
      <ProjectLeftNav />
      <ProjectSidebar />
    </ProjectPage>
  );
}
