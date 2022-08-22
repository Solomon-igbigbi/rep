import React from "react";
import { ICard } from "./card.typings";
import styles from "./card.module.scss";

const Card = ({ 
  children, 
  border, 
  border2, 
  row, 
  style,
  background
}: ICard): JSX.Element => {
  return (
    <div style={style} className={`${styles.card} 
    ${border && styles.border2}
    ${background && styles.background}
    ${border && styles.border} 
    ${row && styles.row}`}>
      {children}
    </div>
  );
};

export default Card;
