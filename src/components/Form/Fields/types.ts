import { Input } from "./Input";
import { Label } from "./Label";
import { Select } from "./Select";

export interface FieldComposition {
  Input: typeof Input;
  Label: typeof Label;
  Select: typeof Select;
}
