import Head from "next/head";
import React from "react";
import { SideBar } from "../../organisms";
import styles from "./Layout.module.scss";
import { ILayout } from "./layout.typings";

export const Layout = ({
  head,
  children,
  active,
  error,
}: ILayout): React.ReactElement => {
  return (
    <div className={styles.bg}>
      <Head>
        <title>{`Reprezent Me | ${head}`}</title>
      </Head>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.right}>{children}</div>
    </div>
  );
};
