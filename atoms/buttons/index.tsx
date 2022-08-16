import React from "react";
import { IButton } from "./buttons.typings";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";
import styles from "./buttons.module.scss";

const Button = ({
  children,
  disabled = false,
  fullWidth = false,
  variant = "filled",
  size = "lg",
  color = "gold",
  textTransform = "uppercase",
  icon,
  isLoading,
  onClick,
}: IButton): JSX.Element => {
  const btnSize = {
    md: styles.md,
    lg: styles.lg,
    sm: styles.sm,
  };

  const colors = {
    blue: styles.blue,
    gold: styles.gold,
    red: styles.red,
    grey: styles.grey,
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
      ${btnSize[size]} 
      ${colors[color]}`}
      disabled={disabled}
      id="button"
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
