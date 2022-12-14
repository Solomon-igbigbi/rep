import type { NextPage } from "next";
import React from "react";
// import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "./Register.module.scss";
import { Button, Logo, Card, Text } from "../../atoms";
import leftIcon from "../../assests/png/lefticon.png";
import { useRouter } from "next/router";

const Register: NextPage = () => {
  const router = useRouter();
  const margins = {
    marginTop: "-20px",
  };

  const gotoOTP = () => {
    router.push("/otp");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Register</title>
      </Head>

      <main className={styles.main}>
        <Card row={true}>
          <div className={styles.cardLeft}>
            <Logo rlogo={true} size={100} />
            <div className={styles.cardlmid}>
              <Text color="white" variant="h2" bold={true}>
                Welcome Back!
              </Text>
              <div
                style={{
                  width: "180px",
                }}
              >
                <Text
                  color="white"
                  variant="h5"
                  ta="center"
                  // style={margins}
                >
                  To keep connected with us please login with your personal info
                </Text>
              </div>
              <Button
                size="md"
                color="white"
                variant="outline"
                onClick={() => router.push("/login")}
              >
                sign in
              </Button>
            </div>
            <div className={styles.leftcardbottom}>
              <Image
                className={styles.arrowleft}
                src={leftIcon}
                alt="reprezentme logo"
                loading="lazy"
                width={30}
              />
              <span color="white">Back</span>
            </div>
          </div>

          <div className={styles.cardRight}>
            <Text mg="no-margin" variant="h2" color="black" ta="center">
              Register
            </Text>
            <Text mg="no-margin" variant="h4" ta="center" style={margins}>
              Register to connect with your representatives
            </Text>
            <div
              style={{
                width: "250px",
                margin: "40px auto",
              }}
            >
              <Text
                mg="no-margin"
                variant="p-sm"
                color="blue2"
                ta="center"
                style={margins}
              >
                Where would you like to interact with your representatives?
              </Text>
            </div>
            <div className={styles.toogle}>
              <Button
                size="md"
                color="blue"
                textTransform="lowercase"
                shadows={true}
                onClick={function (data?: any): void {
                  throw new Error("Function not implemented.");
                }}
              >
                in my state of Origin
              </Button>
              <Button
                size="md"
                color="skyblue"
                textTransform="lowercase"
                shadows={true}
                onClick={function (data?: any): void {
                  throw new Error("Function not implemented.");
                }}
              >
                in my state of Residence
              </Button>
            </div>

            <div className={styles.inputs}>
              <input className={styles.inputbox} placeholder="Full Name" />
              <input className={styles.inputbox} placeholder="Phone Number" />
              <input className={styles.inputbox} placeholder="Email Address" />
              <input className={styles.inputbox} placeholder="Password" />
            </div>
            <div
              style={{
                margin: "30px 0px 30px 50px",
              }}
            >
              <Button
                fullWidth={true}
                variant="filled"
                color="blue2"
                onClick={gotoOTP}
              >
                create account
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Register;
