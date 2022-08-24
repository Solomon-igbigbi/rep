import { NextPage } from "next";
import React from "react";
import { IconInput, Text } from "../../atoms";
import { ChatBar, Layout } from "../../template";
import notification from "../../assests/svg/notificationBell.svg";
import roompic from "../../assests/svg/grouppicture.svg";
import write from "../../assests/svg/write.svg";
import styles from "./news.module.scss";
import Image from "next/image";
import ChatHead from "../../molecules/chat-head";
import { MessageCard } from "../../molecules";

const News: NextPage = () => {
  return (
    <Layout active="news" head="News">
      <div className={styles.body}>
        <div className={styles.aside}>
          <IconInput fullWidth />
          <div className={styles.notificationBar}>
            <div className={styles.update}>
              <Text bold>Updates</Text>
              <Image src={notification} alt="" />
            </div>
            <div className={styles.write}>
              <Image src={write} alt="" />
            </div>
          </div>
          <div className={styles.chats}>
            <div>
              <Text>Pinned</Text>
              <div className={styles.chatGroup}>
                <ChatBar />
                <ChatBar />
                <ChatBar />
              </div>
            </div>
            <div>
              <Text>Recent</Text>
              <div className={styles.chatGroup}>
                <ChatBar />
                <ChatBar />
                <ChatBar />
                <ChatBar />
                <ChatBar />
                <ChatBar />
                <ChatBar />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <div>
            <ChatHead />
            <div className={styles.left_body}>
              <MessageCard>
                <div className={styles.message}>
                  <div className={styles.message_left}>
                    <Image src={roompic} />
                    <div>
                      <Text bold mg="no-margin">
                        Hello!
                      </Text>
                      <Text mg="no-margin">
                        I am Contoso, a bot that helps you with managing all of
                        your tasks
                      </Text>
                    </div>
                  </div>
                  <div></div>
                </div>
              </MessageCard>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;
