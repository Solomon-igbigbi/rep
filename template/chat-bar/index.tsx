import Image from "next/image";
import React from "react";
import { Text } from "../../atoms";
import avatar from "../../assests/svg/chat-avatar.svg";
import styles from "./chat-bar.module.scss";

const ChatBar = ({
  name,
  preview,
  time = true,
}: {
  name?: string;
  preview?: string;
  time?: boolean;
}) => {
  return (
    <div className={styles.chatBar}>
      <Image src={avatar} alt="" />
      <div>
        <Text mg="no-margin" bold>
          {name || "Apa Ward"}
        </Text>
        <Text mg="no-margin">
          {preview || "Robert Enokela: How's Everyone..."}
        </Text>
      </div>
      <div className={styles.time}>
        <Text mg="no-margin">{time ? "8:00pm" : ""}</Text>
      </div>
    </div>
  );
};

export default ChatBar;
