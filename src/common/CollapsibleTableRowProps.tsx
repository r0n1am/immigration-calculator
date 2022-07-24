import { Breakpoint } from "@mui/material";
import RowData from "./RowData";

interface CollapsibleTableRowProps<T> {
  key: string;
  row: RowData<T>;
  breakpoint: Breakpoint;
  onChange: (t: T) => void;
  data: T[];
}

export default CollapsibleTableRowProps;
