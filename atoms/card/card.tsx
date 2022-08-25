import React from "react";
import { ICard } from "./card.typings";
import styles from "./card.module.scss";

const Card = ({
  children,
  border,
  br = "",
  border2,
  row,
  style,
  fullWidth = false,
  background,
}: ICard): JSX.Element => {
  return (
    <div
      style={style}
      className={`${styles.card} 
    ${border && styles.border2}
    ${background && styles.background}
    ${border && styles.border} 
    ${row && styles.row} ${styles[br]} ${fullWidth && styles.fullWidth}`}
    >
      {children}
    </div>
  );
};

export default Card;
