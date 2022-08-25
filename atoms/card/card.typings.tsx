import { ReactNode } from "react";

export interface ICard {
  children: ReactNode;
  border?: boolean | string;
  border2?: boolean;
  background?: boolean;
  row?: boolean;
  br?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
}
