import React from "react";
import { IInput } from "./input.typings";
import styles from "./Input.module.scss";

const Input = ({
  value,
  variant,
  name,
  placeholder,
  fullWidth = false,
  size = "md",
  type = "text",
  ariaLabel,
  onChange,
}: IInput): JSX.Element => {
  const inputSize = {
    md: styles.md,
    lg: styles.lg,
    sm: styles.sm,
  };

  return (
    <input
      className={`${fullWidth && styles.fullWidth}  ${styles.input}  ${
        inputSize[size]
      } 
  `}
      value={value}
      placeholder={placeholder}
      name={name}
      type={type}
      onChange={onChange}
      data-testid="input"
      aria-label={ariaLabel}
    />
  );
};

export default Input;
