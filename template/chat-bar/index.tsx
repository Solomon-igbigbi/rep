import Image from "next/image";
import React from "react";
import { Text } from "../../atoms";
import avatar from "../../assests/svg/chat-avatar.svg";
import styles from "./chat-bar.module.scss";

const ChatBar = () => {
  return (
    <div className={styles.chatBar}>
      <Image src={avatar} />
      <div>
        <Text mg="no-margin" bold>
          Apa Ward
        </Text>
        <Text mg="no-margin">Robert Enokela: How's Everyone...</Text>
      </div>
      <div className={styles.time}>
        <Text mg="no-margin">8:00pm</Text>
      </div>
    </div>
  );
};

export default ChatBar;
