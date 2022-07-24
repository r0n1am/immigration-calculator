import DataComponentProp from "./DataComponentProp";
import { Renderable } from "./Renderable";

interface RowData<T> {
  scoringSection: string;
  name: string;
  desc: Renderable;
  rowValueCalculator: (t: T) => number;
  rowEditComponent: React.ComponentType<DataComponentProp<T>>;
}

export default RowData;
