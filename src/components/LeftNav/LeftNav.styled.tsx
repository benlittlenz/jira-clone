import styled from "styled-components";
import { font, mixin } from "../../shared/styles";

export const LeftNav = styled.aside`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  height: 100vh;
  width: 64px;
  padding-top: 4.5rem;
  background: #0747a6;
  transition: all 0.1s;
  &:hover {
    width: 200px;
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.6);
  }
`;

export const Item = styled.div`
  position: relative;
  width: 100%;
  height: 42px;
  line-height: 42px;
  padding-left: 64px;
  color: #deebff;
  transition: color 0.1s;
  ${mixin.clickable}
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  i {
    position: absolute;
    left: 18px;
  }
`;

export const ItemText = styled.div`
  position: relative;
  right: 12px;
  visibility: hidden;
  opacity: 0;
  text-transform: uppercase;
  transition: all 0.1s;
  transition-property: right, visibility, opacity;
  ${font.bold}
  ${font.size(12)}
  ${LeftNav}:hover & {
    right: 0;
    visibility: visible;
    opacity: 1;
  }
`;
