import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import styles from "./message.module.scss";

interface Iprops {
  isLoading?: boolean;
  messages?: any | object;
  user?: any | object;
  renderMessage?: any | object;
}

const MessageList = ({
  isLoading,
  messages,
  user,
  renderMessage,
}: Iprops): JSX.Element => {
  let chatContent = <div className="loading-messages-container"></div>;

  if (!isLoading && !messages.length) {
    chatContent = (
      <div
        className={`${styles.text_center} ${styles.img_fluid} ${styles.empty_chat}`}
      >
        <div className={styles.empty_chat_holder}>
          <SmileOutlined className={styles.img_res} />
        </div>

        <div>
          <h2> No new message? </h2>
          <h6 className={styles.empty_chat_sub_title}>
            Send your first message below.
          </h6>
        </div>
      </div>
    );
  } else if (!isLoading && messages.length) {
    chatContent = messages.map((message: any) => {
      if (renderMessage) {
        return renderMessage(message);
      } else {
        const isUser = user.uid === message.sender.uid;
        let renderName;
        if (isUser) {
          renderName = null;
        } else {
          renderName = (
            <div className={styles.sender_name}>@{message.sender.name}</div>
          );
        }
        return (
          <div
            key={message.id}
            style={{
              display: "flex",
              padding: "15px 20px",
              alignItems: "center",
              flexDirection: isUser ? "row-reverse" : "row",
              overflowY: "auto",
            }}
          >
            <div
              className={`${styles.chat_bubble} ${
                isUser ? styles.is_user : styles.is_other
              }`}
            >
              {renderName}
              <div
                className={styles.message}
                style={{ color: isUser ? "#FFF" : "#2D313F" }}
              >
                {message.text}
              </div>
            </div>
          </div>
        );
      }
    });
  }
  return chatContent;
};

export default MessageList;
