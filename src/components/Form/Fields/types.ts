import { Input } from "./Input/Input";
import { Label } from "./Label/Label";

export interface FieldComposition {
  Input: typeof Input;
  Label: typeof Label;
}
