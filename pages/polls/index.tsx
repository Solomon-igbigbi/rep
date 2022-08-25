import { NextPage } from "next";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { Button, IconInput, Text } from "../../atoms";
import { ChatHead, MessageCard } from "../../molecules";
import { ChatBar, Layout } from "../../template";
import styles from "./polls.module.scss";

// import notification from "../../assests/svg/notificationBell.svg";svg";

import search from "../../assests/svg/search.svg";

import write from "../../assests/svg/write.svg";

const Polls: NextPage = () => {
  const [screen, setScreen] = useState<string>("Constituency Polls");
  const handleTabChange = (key: string) => {
    setScreen(key);
  };
  return (
    <Layout head="Polls" active={""}>
      <div className={styles.polls_body}>
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
              <Text bold>Constituency Polls</Text>
              <Text>
                Pick a poll to rate the performace of your representative this
                month.
              </Text>
            </div>
            <div className={styles.write}>
              <Image src={write} alt="" />
            </div>
          </div>
          <div className={styles.chats}>
            <div>
              <div className={styles.chatGroup}>
                <ChatBar
                  name="Benue South Periodic Polls"
                  preview="In Progress"
                  time={false}
                />
                <ChatBar
                  name="Ado / Ogbdibo / Okpkwu"
                  preview="You: There are things we all ..."
                  time={false}
                />
                <ChatBar
                  name="Benue South Periodic Polls"
                  preview="In Progress"
                  time={false}
                />
                <ChatBar
                  name="Benue South Periodic Polls"
                  preview="Polls Ended"
                  time={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <div>
            <ChatHead
              name="Ado/ Ogbadibo/ Okpokwu Senitorial Poll"
              time="30th May 2022 at 10:01pm"
              onChange={handleTabChange}
              tabs={[
                {
                  name: "Constituency Polls",
                  key: "Constituency Polls",
                },
                {
                  name: "Other Polls",
                  key: "Other Polls",
                },
              ]}
            />
            <div className={styles.polls_left_body}>
              {screen.toLocaleLowerCase() === "constituency polls" && (
                <div>In Progress</div>
              )}
              {screen.toLocaleLowerCase() === "other polls" && (
                <div className={styles.vote}>
                  <Text bold>
                    How would you rate performace of the Benue south Senator
                    this month?
                  </Text>
                  <div className={styles.empty_polls}>
                    <Text>
                      Pick a poll to rate the performance of your
                      representatives
                    </Text>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Polls;
