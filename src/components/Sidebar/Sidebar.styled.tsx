import styled from 'styled-components'
import { mixin, color, font } from '../../shared/styles';

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 64px;
  height: 100vh;
  width: 230px;
  padding: 0 16px 24px;
  background: #f4f5f7;
  border-right: 1px solid #dfe1e6;
  @media (max-width: 1100px) {
    width: ${230 - 10}px;
  }
  @media (max-width: 999px) {
    display: none;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  padding: 24px 4px;
`;

export const ProjectTexts = styled.div`
  padding: 3px 0 0 10px;
`;

export const ProjectName = styled.div`
  color: ${color.textDark};
  ${font.size(15)};
  ${font.medium};
`;


export const ProjectCategory = styled.p`
  color: #5E6C84;
  font-size: 13px;
`

export const LinkItem = styled.div<{
  as?: string;
  to?: string;
  target?: string;
}>`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 3px;
  ${mixin.clickable}
  &:hover { background: ${color.backgroundLight}; }
  i {
    margin-right: 15px;
  }
  &.active {
    color: ${color.primary};
    background: ${color.backgroundLight};
    i {
      color: ${color.primary};
    }
  }
`;

export const LinkText = styled.div`
  padding-top: 2px;
  font-size: 14.7px;
`;
