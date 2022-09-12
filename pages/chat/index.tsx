import { NextPage } from "next";
import React from "react";
import { Text } from "../../atoms";
import { Layout } from "../../template";
import styles from "./Chat.module.scss";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Col, Tooltip, Row, Divider, Avatar, List, Badge } from "antd";
// import Image from "next/image";
import Setting from "../../template/setting";
import { SearchOutlined, FormOutlined } from "@ant-design/icons";

const Chat: NextPage = () => {
  const show = true;
  const data = [
    {
      title: "Richard Moore",
    },
    {
      title: "Ado Constituency",
    },
    {
      title: "John Charlse",
    },
    {
      title: "Richard Moore",
    },
  ];

  return (
    <Layout active="chat" head="Chat">
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
                <Text variant="p-sm" bold={true}>
                  Chats(21 Messages)
                </Text>
              </Col>
              <Col span={2} offset={12}>
                <FormOutlined />
              </Col>
            </Row>

            <div
              style={{
                overflowY: "auto",
                height: "70vh",
              }}
            >
              <Divider orientation="left">
                <Text variant="p">Pinned</Text>
              </Divider>

              <List
                size="small"
                itemLayout="horizontal"
                dataSource={data}
                bordered
                renderItem={(item) => (
                  <List.Item
                    actions={[<Badge key="list-loadmore-more" count={5} />]}
                  >
                    <List.Item.Meta
                      avatar={
                        <Badge dot={show} color="blue">
                          <Avatar src="https://joeschmoe.io/api/v1/random" />
                        </Badge>
                      }
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Ant Design, "
                    />
                  </List.Item>
                )}
              />

              <Divider orientation="left">
                <Text variant="p">Groups</Text>
              </Divider>

              <List
                size="small"
                itemLayout="horizontal"
                dataSource={data}
                bordered
                renderItem={(item) => (
                  <List.Item
                    actions={[<Badge key="list-loadmore-more" count={5} />]}
                  >
                    <List.Item.Meta
                      avatar={
                        <Badge dot={show} color="blue">
                          <Avatar src="https://joeschmoe.io/api/v1/random" />
                        </Badge>
                      }
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Ant Design, "
                    />
                  </List.Item>
                )}
              />
            </div>
          </div>
        }
        header={
          <div
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "space-between",
              margin: "5px 0px 10px 0px",
            }}
          >
            <div
              style={{
                width: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Badge dot={show} color="blue">
                <Avatar src="https://joeschmoe.io/api/v1/random" />
              </Badge>
              <Text>Ado/Ogbadibo/Okpokwu</Text>
            </div>
            <Avatar.Group>
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                style={{ backgroundColor: "#1890ff" }}
                icon={<AntDesignOutlined />}
              />
            </Avatar.Group>
          </div>
        }
        content={""}
      />
    </Layout>
  );
};

export default Chat;
