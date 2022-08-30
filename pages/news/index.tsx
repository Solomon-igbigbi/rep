import { NextPage } from "next";
import React, { ChangeEvent } from "react";
import { Button, IconInput, Text } from "../../atoms";
import { ChatBar, Layout } from "../../template";
import notification from "../../assests/svg/notificationBell.svg";
import roompic from "../../assests/svg/grouppicture.svg";
import like from "../../assests/svg/like.svg";
import dislike from "../../assests/svg/dislike.svg";
import army from "../../assests/svg/army.svg";
import search from "../../assests/svg/search.svg";
import parade from "../../assests/svg/parade.svg";
import write from "../../assests/svg/write.svg";
import styles from "./news.module.scss";
import Image from "next/image";
import ChatHead from "../../molecules/chat-head";
import { MessageCard } from "../../molecules";

const News: NextPage = () => {
  const handleTabChange = (key: string) => {
    console.log(key);
  };
  return (
    <Layout active="news" head="News">
      <div className={styles.body}>
        <div className={styles.aside}>
          <IconInput
            icon={search}
            fullWidth
            value={""}
            placeholder={""}
            name={""}
            type={"number"}
            onChange={function (e: ChangeEvent<HTMLInputElement>): void {
              throw new Error("Function not implemented.");
            }}
          />
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
            <ChatHead
              onChange={handleTabChange}
              tabs={[
                {
                  name: "Our Reps",
                  key: "Our Reps",
                },
                {
                  name: "Admin",
                  key: "Admin",
                },
                {
                  name: "Sponsored",
                  key: "Sponsored",
                },
              ]}
            />
            <div className={styles.left_body}>
              <MessageCard picture={roompic}>
                <div className={styles.message}>
                  <div className={styles.message_left}>
                    <div className={styles.message_head}>
                      <Image src={roompic} alt="" />
                      <div>
                        <Text bold mg="no-margin">
                          Hello!
                        </Text>
                        <Text mg="no-margin">
                          I am Contoso, a bot that helps you with managing all
                          of your tasks
                        </Text>
                      </div>
                    </div>
                    <Text mg="no-margin">
                      Here are some of the things I can do:
                    </Text>
                    <ul>
                      <li>
                        <Text mg="no-margin">
                          Alert you when tasks are due soon
                        </Text>
                      </li>
                      <li>
                        <Text mg="no-margin">
                          Alert you when tasks have been marked as at risk
                        </Text>
                      </li>
                      <li>
                        <Text mg="no-margin">
                          Help you view all tasks assigned to your project
                        </Text>
                      </li>
                      <li>
                        <Text mg="no-margin">
                          Provide regular reports on task status and completion
                          rate (i.e. burndown charts)
                        </Text>
                      </li>
                    </ul>
                    <Text>
                      Ready to get started? Sign in! Want to learn more about
                      this application? Take a quick tour.
                    </Text>
                    <div className={styles.message_button}>
                      <Button
                        size="sm"
                        onClick={function (data?: any): void {
                          throw new Error("Function not implemented.");
                        }}
                      >
                        SIGN IN
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={function (data?: any): void {
                          throw new Error("Function not implemented.");
                        }}
                      >
                        TOUR
                      </Button>
                    </div>
                  </div>
                  <div className={styles.message_right}>
                    <Image src={parade} alt="" />
                  </div>
                </div>
              </MessageCard>
              <MessageCard br fullWidth>
                <div className={styles.sponsored}>
                  <Text color="blue">Sponsored Update</Text>
                  <div className={styles.sponsored_body}>
                    <div className={styles.sponsored_img}>
                      <Image src={army} alt="" />
                    </div>
                    <div className={styles.sponsored_text}>
                      <div>
                        <Text bold>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Urna, laoreet pharetra iaculis porta id.
                        </Text>
                      </div>
                      <Text>
                        Lorem Ipsum Dolor Sit Amet, Conse Ctetur Adipiscing orem
                        psum olor it met, onse tetur dipiscing, orem psum olor
                        it met, onse tetur dipiscing
                      </Text>
                      <div className={styles.sponsored_bottom}>
                        <div className={styles.sponsored_reaction}>
                          <Text>You like</Text>
                          <Text color="red">Dislike?</Text>
                          <Image src={like} alt="" />
                          <Image src={dislike} alt="" />
                        </div>
                        <Button
                          size="md"
                          onClick={function (data?: any): void {
                            throw new Error("Function not implemented.");
                          }}
                        >
                          View More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </MessageCard>
              <div className={styles.bot}>
                <MessageCard>
                  <div className={styles.bot_texts}>
                    <div className={styles.bot_actions}>
                      <Text mg="no-margin" color="blue">
                        What Can i do?
                      </Text>
                    </div>
                    <div className={styles.bot_actions}>
                      <Text mg="no-margin" bold>
                        Sign in
                      </Text>
                      <Text mg="no-margin">Sign in to Contoso</Text>
                    </div>
                    <div className={styles.bot_actions}>
                      <Text mg="no-margin" bold>
                        Command A
                      </Text>
                      <Text mg="no-margin">
                        Lorem ipsum dolor sit amet, consectetur
                      </Text>
                    </div>
                    <div className={styles.bot_actions}>
                      <Text mg="no-margin" bold>
                        Command B
                      </Text>
                      <Text mg="no-margin">
                        Lorem ipsum dolor sit amet, consectetur
                      </Text>
                    </div>
                    <div className={styles.bot_actions}>
                      <Text mg="no-margin" bold>
                        Sign Out
                      </Text>
                      <Text mg="no-margin">Sign out of Contoso</Text>
                    </div>
                  </div>
                </MessageCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;
