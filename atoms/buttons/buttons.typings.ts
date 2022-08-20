export interface IButton {
  children: any;
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: "outline" | "filled";
  size?: "lg" | "sm" | "md";
  color?: "blue" | "gold" | "red" | "grey" | "white";
  isLoading?: boolean;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  icon?: HTMLElement & SVGElement;
  onClick: (data?: any) => void;
}
