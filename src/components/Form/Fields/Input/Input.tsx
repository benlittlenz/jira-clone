import React, { useContext } from "react";

import { FieldContext } from "../context";
import { FieldWrapper } from "../Wrapper";

import { StyledInput, InputElement, StyledIcon } from "./Input.styled";
import { InputProps } from "./types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ registration, error, icon, ...props }, ref) => {
    const id = useContext(FieldContext);

    return (
      <FieldWrapper error={error}>
        <StyledInput>
          {icon && <StyledIcon type={icon} size={15} />}
          <InputElement
            ref={ref}
            id={id}
            hasIcon={!!icon}
            error={error}
            {...props}
            {...registration}
          />
        </StyledInput>
      </FieldWrapper>
    );
  }
);

Input.displayName = "Field.input";
