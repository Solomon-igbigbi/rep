import { NextPage } from "next";
import React from "react";
import { Text } from "../../atoms";
import { Layout } from "../../template";
import styles from "./Chat.module.scss";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Col, Tooltip, Row, Divider, Avatar, List, Badge } from "antd";
// import Image from "next/image";
import Setting from "../../template/setting";
import { ChatBox } from "../../organisms";
import { SearchOutlined, FormOutlined } from "@ant-design/icons";

const Chat: NextPage = () => {
  const [messages, setMessages] = React.useState<object[]>([]);
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    const messageList = [
      {
        text: "Hello there",
        id: "1",
        sender: {
          name: "Ironman",
          uid: "user1",
          avatar:
            "https://data.cometchat.com/assets/images/avatars/ironman.png",
        },
      },
      {
        text: "Hi Mr. Stark",
        id: "2",
        sender: {
          name: "Spiderman",
          uid: "user1",
          avatar:
            "https://data.cometchat.com/assets/images/avatars/spiderman.png",
        },
      },
      {
        text: "Hello Spiderman, how are you today?",
        id: "3",
        sender: {
          name: "Ironman",
          uid: "user1",
          avatar:
            "https://data.cometchat.com/assets/images/avatars/ironman.png",
        },
      },
    ];

    const user = {
      uid: "user1",
    };

    setMessages(messageList);
    setUser(user);
  }, [messages, user]);

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
        content={
          <div
            style={{
              maxWidth: "100%",
              marginLeft: "200px",
              paddingTop: "100px",
              marginRight: "30px",
            }}
          >
            <ChatBox messages={messages} user={user} />
          </div>
        }
      />
    </Layout>
  );
};

export default Chat;
