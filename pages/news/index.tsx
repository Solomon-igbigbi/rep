import { NextPage } from "next";
import React from "react";
import { Layout } from "../../template";
import styles from "./news.module.scss";

const News: NextPage = () => {
  return (
    <Layout active="news" head="News">
      <div>News</div>
    </Layout>
  );
};

export default News;
