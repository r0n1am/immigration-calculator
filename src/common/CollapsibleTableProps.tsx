import RowData from "./RowData";

interface CollapsibleTableProps<T> {
  firstColumnHeader: string;
  profiles: T[];
  rowDataListCreator: (p: T[]) => RowData<T>[];
  profileNameExtractor: (p: T) => string;
  ariaLabel: string;
  onProfileChange: (p: T) => void;
}

export default CollapsibleTableProps;