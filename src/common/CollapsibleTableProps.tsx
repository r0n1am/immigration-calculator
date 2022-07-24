import RowData from "./RowData";

interface CollapsibleTableProps<T> {
  firstColumnHeader: string;
  data: T[];
  rowData: RowData<T>[];
  columnNameExtractor: (p: T) => string;
  ariaLabel: string;
  onChange: (p: T) => void;
}

export default CollapsibleTableProps;