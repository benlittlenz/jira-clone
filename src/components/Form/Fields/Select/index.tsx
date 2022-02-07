import React from "react";
import { FieldWrapper } from "../Wrapper";
import { SelectDropdown } from "./Dropdown";
import { StyledSelect, ValueContainer } from "./Dropdown.styled";
import { SelectProps } from "./types";

export const Select: React.FC<SelectProps> = ({ options }) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const activateDropdown = () => {
    setIsDropdownOpen(true);
  };
  return (
    <FieldWrapper>
      <StyledSelect>
        <ValueContainer data-testid='select' onClick={activateDropdown}>{isDropdownOpen && <SelectDropdown options={options}/>}</ValueContainer>
      </StyledSelect>
    </FieldWrapper>
  );
};
Select.displayName = "Field.select";
