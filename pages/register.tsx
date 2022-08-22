import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Register.module.scss";
import { Button, Logo, Card, Text } from "../atoms";
import { textAlign } from "@mui/system";
import leftIcon from "../assests/png/lefticon.png";

const Register: NextPage = () => {
  const margins = {
    marginTop: "-20px",
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Register</title>
      </Head>
      
      <main className={styles.main}>
        <Card
          row={true}
        >
          <div className={styles.cardLeft}>
            <Logo
              rlogo={true}
              size={100}
            />
            <div className={styles.cardlmid}>
              <Text color="white" variant="h2" bold={true} >Welcome Back!</Text>
              <div
                style={{
                  width: "180px",
                }}
              >
                <Text 
                  color="white" 
                  variant="h5" 
                  ta="center"
                  children="To keep connected with us please login
                    with your personal info"
                    style={margins}
                />
              </div>
              <Button 
                size="md"
                color="white"
                variant="outline"
                onClick={function (data?: any): void {
                  throw new Error("Function not implemented.");
                } }
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
              <Text
                variant="p-sm"
                color="white"
              >Back</Text>
            </div>
          </div>

          <div className={styles.cardRight}>
            <Text
              variant="h2"
              color="black"
              ta="center"
            >
              Register
            </Text>
            <Text
              variant="h4"
              ta="center"
              style={margins}
            >Register to connect with your representatives</Text>
            <div
              style={{
                width: "250px",
                margin: "0px auto"
              }}
            >
              <Text
                variant="p-sm"
                color="blue2"
                ta="center"
                style={margins}
              >
                Where would you like to interact with your representatives?
              </Text>
            </div>
            <div
              style={{
                width: "65%",
                margin: "0px auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Button 
                size="md"
                color="blue"
                textTransform="lowercase"
                shadows={true}
                onClick={function (data?: any): void {
                  throw new Error("Function not implemented.");
                } }
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
              } }>
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
                margin: "30px 0px 30px 50px"
              }}
            >
            <Button 
            fullWidth={true}
            variant="filled"
            color="blue2"
            onClick={function (data?: any): void {
              throw new Error("Function not implemented.");
            } }>
              create account
            </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}

export default Register;
