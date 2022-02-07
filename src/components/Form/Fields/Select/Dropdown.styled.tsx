import styled from "styled-components";
import { color, mixin, zIndexValues } from "../../../../shared/styles";

export const StyledSelect = styled.div`
  position: relative;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  border: 1px solid ${color.borderLightest};
  background: ${color.backgroundLightest};
  transition: background 0.1s;
  &:hover {
    background: ${color.backgroundLight};
  }

  &:focus {
    outline: none;
    border: 1px solid ${color.borderInputFocus};
    box-shadow: 0 0 0 1px ${color.borderInputFocus};
    background: #fff;
  }
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
`;

export const Dropdown = styled.div`
  z-index: ${zIndexValues.dropdown};
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: 4px;
  background: #fff;
  ${mixin.boxShadowDropdown};
  width: 100%;
`;

export const DropdownInput = styled.input`
  padding: 10px 14px 8px;
  width: 100%;
  border: none;
  color: ${color.textDarkest};
  background: none;
  &:focus {
    outline: none;
  }
`;

export const Options = styled.div`
  max-height: 200px;
`;

export const Option = styled.div`
  padding: 8px 14px;
  word-break: break-word;
  cursor: pointer;
  &:last-of-type {
    margin-bottom: 8px;
  }
  &.select-option-is-active {
    background: ${color.backgroundLightPrimary};
  }
`;
