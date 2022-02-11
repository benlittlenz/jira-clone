import React, { useLayoutEffect, useRef } from "react";
import { Dropdown, DropdownInput, Options, Option } from "./Dropdown.styled";
import { DropdownProps } from "./types";

export const SelectDropdown = ({ options }: DropdownProps) => {
  const optionsRef = useRef<HTMLDivElement>(null);

  const activeOptionClass = "select-option-is-active";

  useLayoutEffect(() => {
    const setFirstOptionActive = () => {
      const activeOption = getActiveOptionNode();
      if (activeOption) activeOption.classList.remove(activeOptionClass);
      const firstOption = optionsRef.current?.firstChild as HTMLElement;
      if (firstOption) {
        firstOption.classList.add(activeOptionClass);
      }
    }
    setFirstOptionActive();
  })

  const handleInputKeyboardChange = (event: React.KeyboardEvent) => {
    const { key } = event;
    const options = optionsRef.current;
    const activeOption = getActiveOptionNode();
    const nextOption = activeOption?.nextElementSibling as HTMLElement;
    const previousOption = activeOption?.previousElementSibling as HTMLElement;

    if(!activeOption) return;
    if (key === "ArrowDown") {
      if(nextOption) {
        nextOption.focus();
        activeOption.classList.remove(activeOptionClass);
        nextOption.classList.add(activeOptionClass);
      } else {
        activeOption.classList.remove(activeOptionClass);
        options?.firstElementChild?.classList.add(activeOptionClass);
      }
    } else if (key === "ArrowUp") {
      if(previousOption) {
        activeOption.classList.remove(activeOptionClass);
        previousOption.classList.add(activeOptionClass);
        previousOption.focus();
      } else {
        activeOption.classList.remove(activeOptionClass);
        options?.lastElementChild?.classList.add(activeOptionClass);
      }

    } else if (key === "Enter" && activeOption) {
      activeOption.click();
    }
  }

  const handleKeyChange = (event: React.KeyboardEvent) => {
    const { key } = event;
    if(key === 'ArrowDown' || key === 'ArrowUp') {
      handleInputKeyboardChange(event);
    }
  }

  const getActiveOptionNode = () =>
    optionsRef.current?.querySelector(`.${activeOptionClass}`) as HTMLElement;
  return (
    <Dropdown>
      <DropdownInput
        type="text"
        placeholder="Search"
        autoFocus
        onKeyDown={handleKeyChange}
      />
      <Options ref={optionsRef}>
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
