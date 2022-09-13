import React from "react";
import MessageList from "../messagelist";
import styles from "./Chat.module.scss";
import { SendOutlined } from "@ant-design/icons";

interface Iprops {
  messages?: any;
  isLoading?: boolean;
  user?: object;
  renderMessage?(): any;
  typingListener?(): any;
  typingIndicator?: React.ReactNode;
}

const ChatBox = ({
  messages,
  isLoading,
  user,
  renderMessage,
  typingListener,
  typingIndicator,
}: Iprops): JSX.Element => {
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    if (!message && typingListener) {
      typingListener();
      setMessage("");
    }
  });

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    setMessage("");
  };

  return (
    <div className={styles.chat_box}>
      <div className={styles.msg_page}>
        <MessageList
          isLoading={isLoading}
          messages={messages}
          user={user}
          renderMessage={renderMessage}
        />
        {/*  <div className={styles.chat_box_bottom}>
          {typingIndicator ? typingIndicator : ""}
          <div id="end_of_chat"></div>
        </div> */}
      </div>
      <div className={styles.msg_footer}>
        <form className={styles.message_form} onSubmit={handleSendMessage}>
          <div className={styles.input_group}>
            <input
              type="text"
              className={`${styles.form_control} ${styles.message_input}`}
              placeholder="Type a new message"
              value={message}
              onChange={(event: any) => setMessage(event.target.value)}
              required
            />
            <div className={styles.input_icons}>
              <div className={styles.text_icon}>hello</div>
              <SendOutlined />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
