import { Tabs } from "antd";
import Image from "next/image";
import React from "react";
import roompic from "../../assests/svg/grouppicture.svg";
import { Text } from "../../atoms";
import styles from "./chat-head.module.scss";

const { TabPane } = Tabs;

const ChatHead = ({
  name,
  time = "",
  tabs,
  onChange,
}: {
  name?: string;
  time?: string;
  tabs?: any;
  onChange?: any;
}) => {
  return (
    <div className={styles.chat_head}>
      <div className={styles.room_details}>
        <Image src={roompic} alt="" />
        <div>
          <Text mg="no-margin" bold>
            {name || "Ado / Ogbadibo / Okpokwu"}
          </Text>
          <Text mg="no-margin" color="blue">
            {time}
          </Text>
        </div>
      </div>
      {tabs && (
        <Tabs
          className={styles.tabs}
          tabBarStyle={{
            marginBottom: 0,
            color: "#000e80",
          }}
          defaultActiveKey="1"
          onChange={onChange}
        >
          {tabs.map((data: any) => (
            <TabPane className={styles.tab} tab={data.name} key={data.key} />
          ))}
        </Tabs>
      )}
    </div>
  );
};

export default ChatHead;
