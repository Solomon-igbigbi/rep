import { NextPage } from "next";
import React from "react";
import { Layout } from "../../template";
import styles from "./explore.module.scss";
import { Text, Button } from "../../atoms";
import { Tabs, Input } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip, Card } from "antd";
import { data } from "./data";
import "antd/dist/antd.css";

const { TabPane } = Tabs;
const News: NextPage = () => {
  const margins = {
    marginLeft: "70px",
  };

  return (
    <Layout active="news" head="News">
      <div className={styles.explore}>
        <div className={styles.exploreHeader}>
          <Text variant="h2">Explore</Text>
          <Input className={styles.tabInput} placeholder="Search" />
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
        <Tabs className={styles.tabs} defaultActiveKey="1" centered>
          <Text>{""}</Text>
          <Text>{""}</Text>
          <Text>{""}</Text>
          <Text>{""}</Text>
          <Text>{""}</Text>
          <Text>{""}</Text>
          <Text>{""}</Text>
          <Text>{""}</Text>
          <Text>{""}</Text>
          <Text>{""}</Text>
          <TabPane className={styles.tab} tab="Senate Commitee" key="1">
            {data.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  style={{
                    marginLeft: "40px",
                    marginTop: "30px",
                  }}
                >
                  <Card
                    hoverable
                    style={{ width: 200 }}
                    className={styles.groupCard}
                  >
                    <img
                      className={styles.cardImage}
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      style={{
                        width: "190px",
                        height: "180px",
                        margin: "-20px 0px 0px -20px",
                        borderRadius: "20px",
                      }}
                    />
                    <Text variant="p-sm">
                      Senate Committee on Agriculture and Rural Development
                    </Text>
                    <Button
                      style={margins}
                      color="blue2"
                      size="sm"
                      onClick={function (data?: any): void {
                        throw new Error("Function not implemented.");
                      }}
                    >
                      join
                    </Button>
                  </Card>
                </div>
              );
            })}
          </TabPane>
          <TabPane className={styles.tab} tab="Rep Commitee" key="2">
            {data.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  style={{
                    marginLeft: "40px",
                    marginTop: "30px",
                  }}
                >
                  <Card
                    hoverable
                    style={{ width: 200 }}
                    className={styles.groupCard}
                  >
                    <img
                      className={styles.cardImage}
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      style={{
                        width: "190px",
                        height: "180px",
                        margin: "-20px 0px 0px -20px",
                        borderRadius: "20px",
                      }}
                    />
                    <Text variant="p-sm">
                      Senate Committee on Agriculture and Rural Development
                    </Text>
                    <Button
                      style={margins}
                      color="blue2"
                      size="sm"
                      onClick={function (data?: any): void {
                        throw new Error("Function not implemented.");
                      }}
                    >
                      join
                    </Button>
                  </Card>
                </div>
              );
            })}
          </TabPane>
          <TabPane className={styles.tab} tab="House of Assembly" key="3">
            {data.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  style={{
                    marginLeft: "40px",
                    marginTop: "30px",
                  }}
                >
                  <Card
                    hoverable
                    style={{ width: 200 }}
                    className={styles.groupCard}
                  >
                    <img
                      className={styles.cardImage}
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      style={{
                        width: "190px",
                        height: "180px",
                        margin: "-20px 0px 0px -20px",
                        borderRadius: "20px",
                      }}
                    />
                    <Text variant="p-sm">
                      Senate Committee on Agriculture and Rural Development
                    </Text>
                    <Button
                      style={margins}
                      color="blue2"
                      size="sm"
                      onClick={function (data?: any): void {
                        throw new Error("Function not implemented.");
                      }}
                    >
                      join
                    </Button>
                  </Card>
                </div>
              );
            })}
          </TabPane>
          <TabPane className={styles.tab} tab="Other Groups" key="4">
            {data.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  style={{
                    marginLeft: "40px",
                    marginTop: "30px",
                  }}
                >
                  <Card
                    hoverable
                    style={{ width: 200 }}
                    className={styles.groupCard}
                  >
                    <img
                      className={styles.cardImage}
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      style={{
                        width: "190px",
                        height: "180px",
                        margin: "-20px 0px 0px -20px",
                        borderRadius: "20px",
                      }}
                    />
                    <Text variant="p-sm">
                      Senate Committee on Agriculture and Rural Development
                    </Text>
                    <Button
                      style={margins}
                      color="blue2"
                      size="sm"
                      onClick={function (data?: any): void {
                        throw new Error("Function not implemented.");
                      }}
                    >
                      join
                    </Button>
                  </Card>
                </div>
              );
            })}
          </TabPane>
        </Tabs>
      </div>
    </Layout>
  );
};

export default News;
