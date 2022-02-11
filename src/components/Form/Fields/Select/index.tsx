import React, { useRef, useState } from "react";

import { useOnClickOutside } from "../../../../hooks/useOnClickOutside";
import { FieldWrapper } from "../Wrapper";

import { SelectDropdown } from "./Dropdown";
import { StyledSelect, ValueContainer } from "./Dropdown.styled";
import { SelectProps } from "./types";

export const Select: React.FC<SelectProps> = ({ options }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const deactiveDropdown = () => {
    setIsDropdownOpen(false);
    if (selectRef && selectRef.current) {
      selectRef?.current?.focus();
    }
  };

  const activateDropdown = () => {
    setIsDropdownOpen(true);
  };

  useOnClickOutside(selectRef, deactiveDropdown);
  return (
    <FieldWrapper>
      <StyledSelect ref={selectRef}>
        <ValueContainer data-testid="select" onClick={activateDropdown}>
          {isDropdownOpen && <SelectDropdown options={options} />}
        </ValueContainer>
      </StyledSelect>
    </FieldWrapper>
  );
};
Select.displayName = "Field.select";
