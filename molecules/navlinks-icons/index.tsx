import React from "react";
import { Text } from "../../atoms";
import Image from "next/image";
import { INavLinks } from "./navlinks-icons.typings";
import styles from "./navlinks.module.scss";

const NavLinksIcon = ({ text, icon, color = "white" }: INavLinks) => {
  return (
    <div className={styles.navlinks}>
      <Image className={styles.img} src={icon} alt="" />
      <span className={styles.text} color={color}>
        {text}
      </span>
    </div>
  );
};

export default NavLinksIcon;
