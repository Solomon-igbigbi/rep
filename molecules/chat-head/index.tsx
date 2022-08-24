import Image from "next/image";
import React from "react";
import roompic from "../../assests/svg/grouppicture.svg";
import { Text } from "../../atoms";
import styles from "./chat-head.module.scss";

const ChatHead = () => {
  return (
    <div className={styles.chat_head}>
      <div className={styles.room_details}>
        <Image src={roompic} />
        <Text bold>Ado / Ogbadibo / Okpokwu</Text>
      </div>
    </div>
  );
};

export default ChatHead;
