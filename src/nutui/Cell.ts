import { Cell as NCell } from "@nutui/nutui-taro";
import { NuiComponent } from "./NuiComponent";

type CellProps = {
  title?: string;
};

const Cell = NCell;

export default Cell as unknown as NuiComponent<CellProps>;
