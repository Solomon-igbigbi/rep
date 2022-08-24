import React from "react";
import { ICheckInput } from "./input.typings";
import styles from "./Input.module.scss";

const CheckInput = ({
  name,
  type = "checkbox",
  ariaLabel,
  checked = false,
  onChange,
}: ICheckInput): JSX.Element => {
  return (
    <input
      className={`${styles.checkbox}`}
      name={name}
      type={type}
      onChange={onChange}
      checked={checked}
      data-testid="input-check"
      aria-label={ariaLabel}
    />
  );
};

export default CheckInput;
