import { ReactNode } from "react";

export interface ICard {
  children: ReactNode;
  border?: boolean;
  border2?: boolean;
  background?: boolean;
  row?: boolean;
  style?: React.CSSProperties;
}
