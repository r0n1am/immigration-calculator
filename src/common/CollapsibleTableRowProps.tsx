import { Breakpoint } from "@mui/material";
import RowData from "./RowData";

interface CollapsibleTableRowProps<T> {
  key: string;
  row: RowData<T>;
  breakpoint: Breakpoint;
  onProfileChange: (t: T) => void;
}

export default CollapsibleTableRowProps;
