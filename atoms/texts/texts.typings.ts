export interface IText {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "sub-heading" | "p" | "p-sm";
  children: string | number;
  fw?: "light" | "bold" | "normal";
  color?:
    | "gold"
    | "blue"
    | "black"
    | "white"
    | "red"
    | "gray"
    | "green"
    | "blue2";
  ta?: "left" | "center" | "right" | "justify" | "inherit";
  position?: "relative" | "absolute";
  mg?: string;
  bold?: boolean;
  style?: React.CSSProperties;
  className?: string;
  underline?: boolean;
  onClick?: () => void;
}
