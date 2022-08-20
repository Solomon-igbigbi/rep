import type { NextPage } from "next";
import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Button, Logo, Card, Text } from "../atoms";
import styles from "../styles/otp.module.scss";

const Register: NextPage = () => {
    const [verified, setVerified] = useState<boolean>(false);
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));

    return (
        <div className={styles.container}>
            <Head>
                <title>Otp</title>
            </Head>
      
            <main className={styles.main}>
                {
                    !verified ? (
                        <Card
                        row={true}
                    >
                        <div>
                            <Logo
                                rlogo={true}
                            />
                        </div>
                        <div>
                            <Text>Enter OTP</Text>
                            <Text>
                                A verification code has been sent to 
                                +234 809 809 809
                                please enter code
                            </Text>
                            <div>
                                {
                                    otp.map((item, index) => (
                                        <input />
                                    ))
                                }
                            </div>
                            <Text>
                                Didnt received the code?
                            </Text>
                            <div>
                                <Text>Resend Code</Text>
                                <Text>(30)</Text>
                            </div> 
                            <Button onClick={(data?:any) => {
                                setVerified(true)
                            }}>
                                Verify
                            </Button>
                            <div>
                                <Link href="#">Back</Link>
                            </div>
                        </div>
                    </Card>
                    ) : (
                        <Card
                         row={true}
                        >
                        <div>
                            <Logo
                                rlogo={true}
                            />
                        </div>
                        <div>
                           <div>
                            <Button onClick={(data?:any) => {
                                setVerified(false)
                            }}
                            >
                                Verify
                            </Button>
                           </div>
                        </div>
                    </Card>
                    )
                }
            </main>
        </div>
    )
}

export default Register;