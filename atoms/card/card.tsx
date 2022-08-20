import React from "react";
import { ICard } from "./card.typings";
import styles from "./card.module.scss";

const Card = ({ children, border, row }: ICard): JSX.Element => {
  return (
    <div className={`${styles.card} ${border && styles.border} ${row && styles.row}`}>
      {children}
    </div>
  );
};

export default Card;
