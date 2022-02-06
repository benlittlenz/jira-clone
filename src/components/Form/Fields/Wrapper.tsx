import React from "react"
import { FieldError } from "react-hook-form"
import styled from "styled-components"
import { font } from "../../../shared/styles";

interface FieldWrapperProps {
  children: React.ReactNode;
  error?: FieldError | undefined;
}

const StyledWrapper = styled.div`
  margin: 6px 0 8px 0;
`;

const ErrorMessage = styled.p`
  ${font.size(11)};
  font-weight: 500;
  color: red;
`

export const FieldWrapper = ({children, error}: FieldWrapperProps) => {
  return (
    <StyledWrapper>
      {children}
      {error?.message && <ErrorMessage role="alert" aria-label="error-message">{error.message}</ErrorMessage>}
    </StyledWrapper>
  );
}
