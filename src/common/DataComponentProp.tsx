import { Breakpoint } from "@mui/material";

interface DataComponentProp<T>{
  open: boolean;
  value: T;
  onClose: (value?: T) => void;
  breakpoint: Breakpoint;
  [propName: string]: any;
};

export default DataComponentProp;