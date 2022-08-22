import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Register.module.scss";
import { Button, Logo, Card, Text } from "../atoms";

const Register: NextPage = () => {
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
              size={150}
            />
            <div className={styles.cardlmid}>
              <Text color="white" variant="h3" bold={true} >Welcome Back!</Text>
              <Text color="white" variant="p">
                To keep connected with us please login
                with your personal info
              </Text>
              <Button 
                size="md"
                color="white"
                variant="outline"
                onClick={function (data?: any): void {
                  throw new Error("Function not implemented.");
                } }
              >
                Login
              </Button>
            </div>
            <div>Back</div>
          </div>

          <div className={styles.cardRight}>
            <Text>Register</Text>
            <Text>Register to connect wit your representatives</Text>
            <Text>
              Where would you like to interact with your representatives
            </Text>
            <div>
              <Button onClick={function (data?: any): void {
                throw new Error("Function not implemented.");
              } }>
                in my state of Origin
              </Button>
              <Button onClick={function (data?: any): void {
                throw new Error("Function not implemented.");
              } }>
                in my state of Residence
              </Button>
            </div>

            <div>
              <input placeholder="Full Name" />
              <input placeholder="Phone Number" />
              <input placeholder="Email Address" />
              <input placeholder="Password" />
            </div>

            <Button onClick={function (data?: any): void {
              throw new Error("Function not implemented.");
            } }>
              create account
            </Button>
          </div>
        </Card>
      </main>
    </div>
  )
}

export default Register;
