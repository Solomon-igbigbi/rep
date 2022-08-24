import React from "react";
import { IText } from "./texts.typings";
import styles from "./texts.module.scss";

const Text = ({
  variant = "p",
  children,
  style,
  color = "black",
  fw = "normal",
  ta = "left",
  position = "relative",
  mg = "",
  onClick,
  bold = false,
  underline = false,
}: IText): JSX.Element => {
  const type = {
    p: (
      <p
        className={`${styles[variant]}   ${styles[color]}  ${styles[fw]} ${
          styles[ta]
        } ${styles[mg]} ${styles[position]} ${underline && styles.underline}  ${
          bold ? styles.bold : styles.normal
        }`}
        style={style}
        onClick={onClick}
      >
        {children}
      </p>
    ),
    "p-sm": (
      <p
        className={`${styles[variant]} ${styles[color]}  ${styles[fw]} ${
          styles[ta]
        } ${styles[position]} ${underline && styles.underline} ${
          bold ? styles.bold : styles.normal
        }`}
        style={style}
      >
        {children}
      </p>
    ),
    h2: (
      <h2
        className={`${styles[variant]} ${styles[color]}  ${styles[fw]} ${
          styles[ta]
        } ${styles[position]} ${underline && styles.underline} ${
          bold ? styles.bold : styles.normal
        }`}
        style={style}
      >
        {children}
      </h2>
    ),
    h3: (
      <h3
        className={`${styles[variant]} ${styles[color]}  ${styles[fw]} ${
          styles[ta]
        } ${styles[position]} ${underline && styles.underline} ${
          bold ? styles.bold : styles.normal
        }`}
        style={style}
      >
        {children}
      </h3>
    ),
    h4: (
      <h4
        className={`${styles[variant]} ${styles[color]}  ${styles[fw]} ${
          styles[ta]
        } ${styles[position]} ${underline && styles.underline} ${
          bold ? styles.bold : styles.normal
        }`}
        style={style}
      >
        {children}
      </h4>
    ),
    h5: (
      <h5
        className={`${styles[variant]} ${styles[color]}  ${styles[fw]} ${
          styles[ta]
        } ${styles[position]} ${underline && styles.underline} ${
          bold ? styles.bold : styles.normal
        }`}
        style={style}
      >
        {children}
      </h5>
    ),
    "sub-heading": (
      <h6
        className={`${styles[variant]} ${styles[color]}}  ${styles[fw]} ${
          styles[ta]
        } ${styles[position]} ${underline && styles.underline} ${
          bold ? styles.bold : styles.normal
        }`}
        style={style}
      >
        {children}
      </h6>
    ),
    h1: (
      <h1
        className={`${styles[variant]} ${styles[color]}  ${styles[fw]} ${
          styles[ta]
        } ${styles[position]} ${underline && styles.underline} ${
          bold ? styles.bold : styles.normal
        }`}
        style={style}
      >
        {children}
      </h1>
    ),
  };

  return <>{type[variant]}</>;
};

export default Text;
