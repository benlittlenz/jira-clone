import React from "react";

import { useUniqueId } from "../../../hooks/useUniqueId";

import { FieldContext } from "./context";
import { Input } from "./Input";
import { Label } from "./Label";
import { Select } from "./Select";
import { FieldComposition } from "./types";

export const Field: React.FC & FieldComposition = ({ children }) => {
  const id = useUniqueId();

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
Field.Select = Select;
