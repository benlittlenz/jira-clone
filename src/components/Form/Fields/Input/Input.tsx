import React, { useContext } from "react";

import { FieldContext } from "../context";

import { StyledInput, InputElement, StyledIcon } from "./Input.styled";
import { InputProps } from "./types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ registration, error, icon, ...props }, ref) => {
    const id = useContext(FieldContext);

    return (
      <StyledInput>
        {icon && <StyledIcon type={icon} size={15} /> }
        <InputElement
          ref={ref}
          id={id}
          hasIcon={!!icon}
          {...props}
          {...registration}
        />
      </StyledInput>
    );
  }
);

Input.displayName = "Field.input";
