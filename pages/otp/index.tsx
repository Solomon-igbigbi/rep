import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Button, Logo, Card, Text } from "../../atoms";
import styles from "./Otp.module.scss";
import IphoneImg from "../../assests/png/iphoneimg.png";
import leftIcon from "../../assests/png/lefticon.png";
// import dust from "../../assests/png/dust.png";
import Verified from "../../assests/png/verified.png";
// import { display } from "@mui/system";
import { useRouter } from "next/router";

const Register: NextPage = () => {
  const router = useRouter();
  const [verified, setVerified] = useState<boolean>(false);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));

  const margins = {
    margin: "-20px auto 0px auto",
    width: "45%",
  };

  const gotoNews = () => {
    setOtp([""]);
    router.push("/setup-constituency");
  };

  const number = "091****456";

  return (
    <div className={styles.container}>
      <Head>
        <title>Otp</title>
      </Head>

      <main className={styles.main}>
        {!verified ? (
          <Card row={true}>
            <div className={styles.cardleft}>
              <div>
                <Logo rlogo={true} size={150} />
              </div>
              <div>
                <Image
                  src={IphoneImg}
                  alt="iphone img"
                  loading="lazy"
                  width={300}
                  height={400}
                />
              </div>
            </div>
            <div className={styles.cardright}>
              <div>
                <Text variant="h2" color="black" ta="center">
                  Enter OTP
                </Text>
              </div>
              <div>
                <Text variant="p-sm" color="black" ta="center" style={margins}>
                  {`A verification code has been sent to ${number} please enter code`}
                </Text>
              </div>
              <div className={styles.otpboxes}>
                {otp.map((item, index) => (
                  <input key={index} type="number" className={styles.otpbox} />
                ))}
              </div>
              <div
                style={{
                  marginTop: "28px",
                }}
              >
                <Text variant="p-sm" color="black" ta="center">
                  Didnt received the code?
                </Text>
              </div>
              <div className={styles.resendlink}>
                <Text variant="p-sm" color="blue" ta="center">
                  Resend Code
                </Text>
                <Text variant="p-sm" bold={true}>
                  (30)
                </Text>
              </div>
              <div
                style={{
                  marginTop: "50px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="filled"
                  color="blue2"
                  size="md"
                  onClick={(data?: any) => {
                    setVerified(true);
                  }}
                >
                  Verify
                </Button>
              </div>
              <div
                style={{
                  width: "70%",
                  margin: "120px auto 0px auto",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Image src={leftIcon} alt="arrow left" loading="lazy" />
                <Text variant="p-sm">Back</Text>
              </div>
            </div>
          </Card>
        ) : (
          <Card row={true}>
            <div className={styles.cardleft}>
              <div>
                <Logo rlogo={true} size={150} />
              </div>
              <div>
                <Image
                  src={IphoneImg}
                  alt="iphone img"
                  loading="lazy"
                  width={300}
                  height={400}
                />
              </div>
            </div>
            <div className={styles.cardright}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card border2={true} background={true}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "50px",
                    }}
                  >
                    <Image
                      src={Verified}
                      alt="verified icon"
                      loading="lazy"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <Text variant="h2" color="blue2" ta="center" bold={true}>
                      Verified
                    </Text>
                  </div>
                  <div>
                    <Text variant="p-sm" ta="center" style={margins}>
                      Welcome to ReprezentMe Please proceed to setup your
                      constituency.
                    </Text>
                  </div>
                  <div
                    style={{
                      margin: "50px 0px 100px 0px",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="filled"
                      color="blue2"
                      size="md"
                      onClick={gotoNews}
                    >
                      Proceed
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Register;
