import React from 'react'
import styles from "./Setting.module.scss"
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

interface ISet {
    sider: React.ReactNode;
    header: React.ReactNode;
    content: React.ReactNode;
}

function Setting({
    sider,
    header,
    content
}: ISet) {
  return (
    <div className={styles.wrapper}>
        <Layout className={styles.container}>
            <Sider className={styles.sider} width={400}>{sider}</Sider>
            <Layout>
                <Header className={styles.header}>{header}</Header>
                <Content className={styles.content}>{content}</Content>
            </Layout>
        </Layout>
    </div>
  )
}

export default Setting