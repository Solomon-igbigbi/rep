import { NextPage } from "next";
import React from "react";
import { Layout, } from "../../template";
import styles from "./explore.module.scss"
import { Text } from "../../atoms"
import { Tabs, Input } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip } from 'antd';

const { TabPane } = Tabs;

const News: NextPage = () => {
  return (
    <Layout active="news" head="News">
        <div className={styles.explore}>
        <div className={styles.exploreHeader}>
            <Text variant="h2" >Explore</Text>
             <Input className={styles.tabInput} placeholder="Search" />
             <Avatar.Group>
                <Avatar src="https://joeschmoe.io/api/v1/random" />
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                </Tooltip>
                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
            </Avatar.Group>
        </div>
        <Tabs className={styles.tabs} defaultActiveKey="1" centered>
            <Text>{''}</Text>
            <Text>{''}</Text>
            <Text>{''}</Text>
            <Text>{''}</Text>
            <Text>{''}</Text>
            <Text>{''}</Text>
            <Text>{''}</Text>
            <Text>{''}</Text>
            <Text>{''}</Text>
            <Text>{''}</Text>
            <TabPane className={styles.tab} tab="Senate Commitee" key="1">
            Content of Tab Pane 1
            </TabPane>
            <TabPane className={styles.tab} tab="Rep Commitee" key="2">
            Content of Tab Pane 2
            </TabPane>
            <TabPane className={styles.tab} tab="House of Assembly" key="3">
            Content of Tab Pane 3
            </TabPane>
            <TabPane className={styles.tab} tab="Other Groups" key="4">
            Content of Tab Pane 3
            </TabPane>
        </Tabs>
        </div>
    </Layout>
  );
};

export default News;
