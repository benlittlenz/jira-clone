import styled from 'styled-components'
import { mixin, color } from '../shared/styles';

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 230px;
  padding: 0 16px 24px;
  background: #F4F5F7;
  border-right: 1px solid #dfe1e6;
`

export const ProjectInfo = styled.div`
  display: flex;
  padding: 24px 4px;
`;

export const ProjectTexts = styled.div`
  // padding: 3px 0 0 10px;
`

export const ProjectName = styled.h4`
  color: #42526E;
  font-size: 15px;
  font-weight: 500;
  padding: 0;
`


export const ProjectCategory = styled.p`
  color: #5E6C84;
  font-size: 13px;
`

export const LinkItem = styled.div<{
  as?: string;
  to?: string;
  target?: string;
}>`
  position: relative;
  display: flex;
  padding: 8px 12px;
  border-radius: 3px;
  ${mixin.clickable}
  &:hover { background: ${color.backgroundLight};
  i {
    margin-right: 15px;
    font-size: 20px;
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
