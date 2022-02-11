import React from "react";

import { useUniqueId } from "../../../hooks/useUniqueId";
import { Input } from "./Input";
import { FieldContext } from "./context";
import { Label } from "./Label";
import { FieldComposition } from "./types";
import { Select } from "./Select";

export const Field: React.FC & FieldComposition = ({ children }) => {
  const id = useUniqueId();

  return (
    <FieldContext.Provider value={id}>
      {children}
    </FieldContext.Provider>
  )
}

Field.Label = Label;
Field.Input = Input;
Field.Select = Select;
