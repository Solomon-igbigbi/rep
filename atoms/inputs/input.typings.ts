export interface IInput {
  value: string;
  placeholder: string;
  name: string;
  type: "text" | "password" | "number" | "email" | "phone";
  fullWidth?: boolean;
  variant?: "outline" | "filled";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ariaLabel?: string;
  size?: "lg" | "md" | "sm";
}

export interface IPhoneInput {
  handleChange: any;
  value: string;
  size?: "lg" | "md" | "sm";
}

export interface ICheckInput {
  name?: string;
  type: "checkbox" | "radio";
  ariaLabel?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
