import { NextPage } from "next";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { Progress, Rate } from 'antd'
import { IconInput, Text, Card } from "../../atoms";
import { ChatHead } from "../../molecules";
import { ChatBar, Layout } from "../../template";
import styles from "./polls.module.scss";

// import notification from "../../assests/svg/notificationBell.svg";svg";

import search from "../../assests/svg/search.svg";

import write from "../../assests/svg/write.svg";

const Polls: NextPage = () => {
  const [screen, setScreen] = useState<string>("Constituency Polls");
  const handleTabChange = (key: string) => {
    setScreen(key);
  };
  return (
    <Layout head="Polls" active={""}>
      <div className={styles.polls_body}>
        <div className={styles.aside}>
          <IconInput
            icon={search}
            fullWidth
            value={""}
            placeholder={""}
            name={""}
            type={"number"}
            onChange={function (e: ChangeEvent<HTMLInputElement>): void {
              throw new Error("Function not implemented.");
            }}
          />
          <div className={styles.notificationBar}>
            <div className={styles.update}>
              <Text bold>Constituency Polls</Text>
              <Text>
                Pick a poll to rate the performace of your representative this
                month.
              </Text>
            </div>
            <div className={styles.write}>
              <Image src={write} alt="" />
            </div>
          </div>
          <div className={styles.chats}>
            <div>
              <div className={styles.chatGroup}>
                <ChatBar
                  name="Benue South Periodic Polls"
                  preview="In Progress"
                  time={false}
                />
                <ChatBar
                  name="Ado / Ogbdibo / Okpkwu"
                  preview="You: There are things we all ..."
                  time={false}
                />
                <ChatBar
                  name="Benue South Periodic Polls"
                  preview="In Progress"
                  time={false}
                />
                <ChatBar
                  name="Benue South Periodic Polls"
                  preview="Polls Ended"
                  time={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <div>
            <ChatHead
              name="Ado/ Ogbadibo/ Okpokwu Senitorial Poll"
              time="30th May 2022 at 10:01pm"
              onChange={handleTabChange}
              tabs={[
                {
                  name: "Constituency Polls",
                  key: "Constituency Polls",
                },
                {
                  name: "Other Polls",
                  key: "Other Polls",
                },
              ]}
            />
            <div className={styles.polls_left_body}>
              {screen.toLocaleLowerCase() === "constituency polls" && (
                <div className={styles.constituency_wrapper}>
                  <div className={styles.constituency_polls_left}>
                    <Text variant="h5" bold>How would you rate performance of the Benue south Senator this month?</Text>
                    <div className={styles.ratings_card}>
                      <Card style={{
                        width: "100%"
                      }}>
                        <div style={{
                          width: "100%",
                          height: "20px"
                        }}>
                          <div style={{
                            width: "40%",
                            height: "30px",
                            backgroundColor: "#f2c94c",
                            float: "right",
                            borderBottomLeftRadius: "30px",
                            borderTopRightRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}>
                            <Rate style={{ 
                              fontSize: "10px", 
                              color: "#000000"
                               }} allowHalf defaultValue={2.5} />
                          </div>
                        </div>
                        <div style={{
                          padding: "0px 40px 5px 30px"
                        }}>
                          <Text style={{
                            marginBottom: "-2px"
                          }} variant="h5" bold>Excellent</Text>
                          <Progress
                            strokeColor={{
                              '0%': '#108ee9',
                              '100%': '#87d068',
                            }}
                            percent={30}
                            showInfo={false}
                          />
                          <Text variant="p-sm">8 Votes</Text>     
                        </div>
                      </Card>
                      <Card style={{
                        width: "100%"
                      }}>
                        <div style={{
                          width: "100%",
                          height: "20px"
                        }}>
                          <div style={{
                            width: "40%",
                            height: "30px",
                            backgroundColor: "#f2c94c",
                            float: "right",
                            borderBottomLeftRadius: "30px",
                            borderTopRightRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}>
                            <Rate style={{ 
                              fontSize: "10px", 
                              color: "#000000"
                               }} allowHalf defaultValue={4} />
                          </div>
                        </div>
                        <div style={{
                          padding: "0px 40px 5px 30px"
                        }}>
                          <Text style={{
                            marginBottom: "-2px"
                          }} variant="h5" bold>Good</Text>
                          <Progress
                            strokeColor={{
                              '0%': '#9fcc2f',
                              '100%': '#9fcc2f',
                            }}
                            percent={10}
                            showInfo={false}
                          />
                          <Text variant="p-sm">4 Votes</Text>     
                        </div>
                      </Card>
                      <Card style={{
                        width: "100%"
                      }}>
                        <div style={{
                          width: "100%",
                          height: "20px"
                        }}>
                          <div style={{
                            width: "40%",
                            height: "30px",
                            backgroundColor: "#000e80",
                            float: "right",
                            borderBottomLeftRadius: "30px",
                            borderTopRightRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}>
                            <Rate style={{ 
                              fontSize: "10px", 
                              color: "#f2c94c"
                               }} allowHalf defaultValue={3} />
                          </div>
                        </div>
                        <div style={{
                          padding: "0px 40px 5px 30px"
                        }}>
                          <Text style={{
                            marginBottom: "-2px"
                          }} variant="h5" bold>Average</Text>
                          <Progress
                            strokeColor={{
                              '0%': '#edde40',
                              '100%': '#edde40',
                            }}
                            percent={50}
                            showInfo={false}
                          />
                          <Text variant="p-sm">58 Votes</Text>     
                        </div>
                      </Card>
                      <Card style={{
                        width: "100%"
                      }}>
                        <div style={{
                          width: "100%",
                          height: "20px"
                        }}>
                          <div style={{
                            width: "40%",
                            height: "30px",
                            backgroundColor: "#f2c94c",
                            float: "right",
                            borderBottomLeftRadius: "30px",
                            borderTopRightRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}>
                            <Rate style={{ 
                              fontSize: "10px", 
                              color: "#000000"
                               }} allowHalf defaultValue={2} />
                          </div>
                        </div>
                        <div style={{
                          padding: "0px 40px 5px 30px"
                        }}>
                          <Text style={{
                            marginBottom: "-2px"
                          }} variant="h5" bold>Below Average</Text>
                          <Progress
                            strokeColor={{
                              '0%': '#ee9f25',
                              '100%': '#ee9f25',
                            }}
                            percent={20}
                            showInfo={false}
                          />
                          <Text variant="p-sm">15 Votes</Text>     
                        </div>
                      </Card>
                      <Card style={{
                        width: "100%"
                      }}>
                        <div style={{
                          width: "100%",
                          height: "20px"
                        }}>
                          <div style={{
                            width: "40%",
                            height: "30px",
                            backgroundColor: "#f2c94c",
                            float: "right",
                            borderBottomLeftRadius: "30px",
                            borderTopRightRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}>
                            <Rate style={{ 
                              fontSize: "10px", 
                              color: "#000000"
                               }} allowHalf defaultValue={1} />
                          </div>
                        </div>
                        <div style={{
                          padding: "0px 40px 5px 30px"
                        }}>
                          <Text style={{
                            marginBottom: "-2px"
                          }} variant="h5" bold>Poor</Text>
                          <Progress
                            strokeColor={{
                              '0%': '#e53a1b',
                              '100%': '#e53a1b',
                            }}
                            percent={20}
                            showInfo={false}
                          />
                          <Text variant="p-sm">21 Votes</Text>     
                        </div>
                      </Card>
                    </div>
                  </div>
                  <div className={styles.constituency_polls_right}>hello</div>
                </div>
              )}
              {screen.toLocaleLowerCase() === "other polls" && (
                <div className={styles.vote}>
                  <Text bold>
                    How would you rate performace of the Benue south Senator
                    this month?
                  </Text>
                  <div className={styles.empty_polls}>
                    <Text>
                      Pick a poll to rate the performance of your
                      representatives
                    </Text>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Polls;
