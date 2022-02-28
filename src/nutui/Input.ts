import { Input } from "@nutui/nutui-taro";
import { NuiComponent } from "./NuiComponent";

type InputProps = {
  value?: unknown;
  onClick?: () => void;
};

export default Input as any as NuiComponent<InputProps>;
