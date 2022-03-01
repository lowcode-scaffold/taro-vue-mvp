import { Input as NInput } from "@nutui/nutui-taro";
import { NuiComponent } from "./NuiComponent";

type InputProps = {
  modelValue: unknown;
  hasBorder?: boolean;
  disabled?: boolean;
  label?: string;
  clearable?: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
  onClear?: () => void;
};

const Input = NInput;

export default Input as unknown as NuiComponent<InputProps>;
