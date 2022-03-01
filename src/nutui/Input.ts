import { Input as NInput } from "@nutui/nutui-taro";
import { NuiComponent } from "./NuiComponent";

type InputProps = {
  value?: unknown;
  onClick?: () => void;
};

const Input = NInput;

export default Input as unknown as NuiComponent<InputProps>;
