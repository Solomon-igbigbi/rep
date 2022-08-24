import Image from "next/image";
import React from "react";
import { IIconInput } from "./icon-input.typings";
import styles from "./Input.module.scss";

const IconInput = ({
  value,
  variant,
  name,
  placeholder,
  fullWidth = false,
  size = "md",
  type = "text",
  onChange,
  icon,
  iconPosition = "left",
}: IIconInput): JSX.Element => {
  const inputSize = {
    md: styles.md,
    lg: styles.lg,
    sm: styles.sm,
  };

  return (
    <div className={styles.icon_input}>
      <input
        className={`${fullWidth && styles.fullWidth}  ${
          styles.icon_input_field
        }  ${inputSize[size]} 
      `}
        value={value}
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
        data-testid="input"
      />
      <div className={`${styles.icon} ${styles[iconPosition]}`}>
        <Image src={icon} alt="input with icon" />
      </div>
    </div>
  );
};

export default IconInput;
