import React, { useContext } from "react";
import { InputElement } from "../../../Input/Input.styled";

import { FieldContext } from "../context";

import { StyledInput } from "./Input.styled";
import { InputProps } from "./types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ registration, error, ...props }, ref) => {
    const id = useContext(FieldContext);

    return (
      <StyledInput>
        <InputElement
          ref={ref}
          id={id}
          {...props}
          {...registration}
        />
      </StyledInput>
    );
  }
);

Input.displayName = "Field.input";
