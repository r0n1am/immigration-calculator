import { ReactChild } from "react";
// You could keep `ReactNode`, though we can do better with more narrow types
export type Renderable = ReactChild | Renderable[];