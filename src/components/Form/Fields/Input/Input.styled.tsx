import styled from "styled-components";
import { color, font } from "../../../../shared/styles";
import { Icon } from "../../../Icon/Index";

export const StyledInput = styled.div`
  position: relative;
  display: inline-block;
  height: 32px;
  width: 100%;
`;

export const InputElement = styled.input<{ hasIcon: boolean }>`
  height: 100%;
  width: 100%;
  padding: 0 7px;
  border-radius: 3px;
  border: 1px solid ${color.borderLightest};
  color: ${color.textDarkest};
  background: ${color.backgroundLightest};
  transition: background 0.1s;
  ${font.regular}
  ${font.size(15)}
  ${(props) => props.hasIcon && "padding-left: 32px;"}
`;

export const StyledIcon = styled(Icon)`
  position: relative;
  top: 8px;
  left: 8px;
  pointer-events: none;
  color: ${color.textMedium};
`;
