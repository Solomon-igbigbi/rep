import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "./Login.module.scss";
import Group from "../../assests/png/Group.png";
import FacebookIcon from "../../assests/png/facebookImg.png";
import GoogleIcon from "../../assests/png/googleImg.png";

const Login: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.loginCard}>
          <div className={styles.cardLeft}>
            <div className={styles.topLogo}>
              <Image src={Group} alt="reprezentme logo" loading="lazy" />
            </div>

            <div className={styles.form}>
              <div className={styles.bemVindos}>
                <span className={styles.signin}>Sign in to</span>
                <span className={styles.text2}>Reprezent</span>
                <span className={styles.text3}>Me</span>
              </div>

              <div className={styles.socials}>
                <Image src={FacebookIcon} alt="facebook icon" loading="lazy" />
                <Image src={GoogleIcon} alt="google icon" loading="lazy" />
                <Image src={GoogleIcon} alt="linkedin icon" loading="lazy" />
              </div>

              <div className={styles.username}>
                <input type="text" placeholder="Username" />
              </div>
              <div className={styles.password}>
                <input type="password" placeholder="Password" />
              </div>

              <div className={styles.forgot}>
                <Link href="#">Forgot Password?</Link>
              </div>
              <Link href="/news">
                <button>Login now</button>
              </Link>
            </div>
          </div>
          <div className={styles.cardRight}>
            <span className={styles.text1}>Hello, Friends</span>
            <span className={styles.text2}>
              Enter your personal details and strat journy with us
            </span>
            <Link href="/register">
              <button>SIGN UP</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
