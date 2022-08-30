import React, { ReactElement } from "react";
import { Card } from "../../atoms";
import Image from "next/image";
import styles from "./message-card.module.scss";

const MessageCard = ({
  children,
  picture,
  fullWidth,
  br,
}: {
  children: ReactElement;
  picture?: string;
  fullWidth?: boolean;
  br?: boolean;
}) => {
  return (
    <div className={styles.message_card}>
      <Image alt="" src={picture ? picture : ""} />
      <Card fullWidth={fullWidth} br={`${!br && "no-radius"}`}>
        {children}
      </Card>
    </div>
  );
};

export default MessageCard;
