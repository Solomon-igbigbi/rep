import React from "react";
import { IButton } from "./buttons.typings";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";
import styles from "./buttons.module.scss";

const Button = ({
  children,
  disabled = false,
  fullWidth = false,
  shadows = false,
  variant = "filled",
  size = "lg",
  color = "gold",
  textTransform = "uppercase",
  icon,
  isLoading,
  style,
  onClick,
}: IButton): JSX.Element => {
  const btnSize = {
    md: styles.md,
    lg: styles.lg,
    sm: styles.sm,
  };

  const colors = {
    blue: styles.blue,
    blue2: styles.blue2,
    gold: styles.gold,
    red: styles.red,
    grey: styles.grey,
    white: styles.white,
    skyblue: styles.skyblue
  };

  const variantEnum =
    variant === "filled" ? `filled-btn-${color}` : `outline-btn-${color}`;

  const handleClick = (): void => {
    onClick();
  };

  return (
    <motion.button
      whileTap={{
        scale: 1.1,
      }}
      className={`${fullWidth && styles.full_width_btn} ${
        styles[variantEnum]
      } ${styles.button} ${styles[textTransform]} 
      ${shadows && styles.shadows}
      ${btnSize[size]} 
      ${colors[color]}`}
      disabled={disabled}
      id="button"
      style={style}
      onClick={handleClick}
      data-testid="button"
    >
      {/* {icon ? (
        <div className={`${styles.btn_children}`}>
          {icon}
          {children}
        </div>
      ) : (
        { children }
      )} */}
      {!isLoading ? children : <CircularProgress color={"inherit"} size={20} />}
    </motion.button>
  );
};

export default Button;
