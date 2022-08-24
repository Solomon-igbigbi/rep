import React from "react";
import styles from "./Input.module.scss";

const TextField = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <textarea
      className={styles.textarea}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};

export default TextField;
