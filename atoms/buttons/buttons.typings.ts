export interface IButton {
  children: any;
  disabled?: boolean;
  fullWidth?: boolean;
  shadows?: boolean;
  variant?: "outline" | "filled";
  size?: "lg" | "sm" | "md";
  color?: "blue" | "gold" | "red" | "grey" | "white" | "blue2" | "skyblue";
  isLoading?: boolean;
  style?: React.CSSProperties;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  icon?: HTMLElement & SVGElement;
  onClick: (data?: any) => void;
}
