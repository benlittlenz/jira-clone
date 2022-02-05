import React from "react";

import { useUniqueId } from "../../../hooks/useUniqueId";
import { Input } from "../../Input";
import { FieldContext } from "./context";
import { FieldComposition } from "./types";

export const Field: React.FC & FieldComposition = ({ children }) => {
  const id = useUniqueId();

  return (
    <FieldContext.Provider value={id}>
      {children}
    </FieldContext.Provider>
  )
}

Field.Input = Input;
