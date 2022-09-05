import { NextPage } from "next";
import React from "react";
import { Text } from "../../atoms";
import { Layout } from "../../template";
import styles from "./Chat.module.scss";
import { Input, Col, Row } from "antd";
// import Image from "next/image";
import Setting from "../../template/setting";
import {
  SearchOutlined,
  FormOutlined,
} from "@ant-design/icons";





const Chat: NextPage = () => {



  return (
    <Layout active="news" head="News">
      <Setting
        sider={
          <div className={styles.sideWrapper}>
            <Input
              className={styles.input}
              placeholder="Search"
              prefix={<SearchOutlined />}
            />

            <Row className={styles.Ac}>
              <Col span={8}>
                <Text variant="p" bold={true}>
                  Account Settings
                </Text>
                <span>{`(21 Messages)`}</span>
              </Col>
              <Col span={2} offset={12}>
                <FormOutlined />
              </Col>
            </Row>

          </div>
        }
        header={
         'hello'
        }
        content={
          'hello'
        }
      />
    </Layout>
  );
};

export default Chat;
