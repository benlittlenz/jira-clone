import { Input } from "./Input/Input";
import { Label } from "./Label/Label";
import { Select } from "./Select";

export interface FieldComposition {
  Input: typeof Input;
  Label: typeof Label;
  Select: typeof Select;
}
