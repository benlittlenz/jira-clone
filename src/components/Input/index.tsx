import React, { forwardRef } from "react";
import { InputElement, StyledInput } from "./Input.styled";

interface InputProps {
  icon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  icon,
  ...props
}, ref) => {
  return (
    <StyledInput>
      <InputElement {...props} ref={ref} />
    </StyledInput>
  )
})
