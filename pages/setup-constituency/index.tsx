import type { NextPage } from "next";
import Head from "next/head";
import { Logo, Card, Text, Button } from "../../atoms";
import { Selects } from "../../molecules";
import styles from "./SetConstituency.module.scss";
import React from "react";
import { message, Steps } from "antd";
import "antd/dist/antd.css";
import { useRouter } from "next/router";

const { Step } = Steps;

// const { Option } = Select;

const steps = [
  {
    title: "State",
    content: <Selects placeholder="State" options="lagos" />,
  },
  {
    title: "LGA",
    content: <Selects placeholder="LGA" options="lagos" />,
  },
  {
    title: "Ward",
    content: <Selects placeholder="Ward" options="lagos" />,
  },
];

const SetupConstituency: NextPage = () => {
  // const [index, setIndex] = React.useState(1);

  const [current, setCurrent] = React.useState(0);
  const router = useRouter();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const gotoNews = () => {
    message.success("Processing complete!");
    router.push("/news");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Constituency Setup</title>
      </Head>

      <main className={styles.main}>
        <Card>
          <div className={styles.logo}>
            <Logo llogo={true} size={170} />
          </div>
          <div className={styles.title}>
            <Text variant="h2" color="blue2" bold={true} ta="center">
              {`Let's setup your constituence`}
            </Text>
          </div>
          <div className={styles.multistep}>
            <Steps current={current}>
              {steps.map((item) => (
                <>
                  <Step key={item.title} title={item.title} />
                </>
              ))}
            </Steps>
            <div className={styles.stepsContent}>{steps[current].content}</div>
            <div className={styles.stepsAction}>
              {current === steps.length - 1 && (
                <Button size="md" color="blue" onClick={gotoNews}>
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button
                  size="md"
                  color="blue2"
                  // variant="outline"
                  onClick={() => prev()}
                >
                  Previous
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button size="md" color="blue" onClick={() => next()}>
                  Next
                </Button>
              )}
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default SetupConstituency;
