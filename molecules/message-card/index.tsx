import React from "react";
import { Card } from "../../atoms";
import roompic from "../../assests/svg/grouppicture.svg";
import Image from "next/image";
import styles from "./message-card.module.scss";

const MessageCard = () => {
  return (
    <div className={styles.message_card}>
      <Image src={roompic} />
      <Card>jjjjjj</Card>
    </div>
  );
};

export default MessageCard;
