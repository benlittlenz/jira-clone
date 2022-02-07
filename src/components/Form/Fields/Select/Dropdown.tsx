import { FieldWrapper } from "../Wrapper";
import { Dropdown, DropdownInput, Options, Option } from "./Dropdown.styled";
import { DropdownProps } from "./types";

export const SelectDropdown = ({ options }: DropdownProps) => {
  return (
      <Dropdown>
        <DropdownInput type="text" placeholder="Search" autoFocus />
        <Options>
          {options.map((option) => (
            <Option
              key={option.value}
              data-select-option-value={option.value}
              data-testid={`select-option:${option.label}`}
            >
              {option.label}
            </Option>
          ))}
        </Options>
      </Dropdown>
  );
};
