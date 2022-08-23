import type { NextPage } from "next";
import Head from "next/head";
import gplay from "../assests/svg/gplay.svg";
import astore from "../assests/svg/astore.svg";
import qrcode from "../assests/svg/qrcode.svg";
import phone from "../assests/svg/phone.svg";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Navbar } from "../molecules/indext";
import { Text } from "../atoms";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ReprezentMe</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.landing_page}>
          <div>
            <div className={styles.navbar}>
              <Navbar />
            </div>
          </div>
          <section>
            <div className={styles.body}>
              <div className={styles.body_card}>
                <div className={styles.body_content}>
                  <p
                    className={`${styles.banner_lg_text_1} ${styles.large_text}`}
                  >
                    ENSURE BETTER
                  </p>
                  <p
                    className={`${styles.banner_lg_text_2} ${styles.large_text}`}
                  >
                    REPRESENTATION
                  </p>
                  <p className={styles.country}>IN YOUR COUNTRY WITH</p>
                  <div className={styles.banner_aside}>
                    <p className={styles.reprezent}>
                      <span>
                        Reprezent<b className={styles.me}>Me</b>
                      </span>
                      <span className={styles.hr}></span>
                    </p>
                    <p className={styles.banner_text}>
                      Lend your voice to deepening representative democracy in
                      Nigeria. Get actively involved by exercising your rights.
                      It is your right to be represented well. Exercise it.
                    </p>
                    <div className={styles.banner_footer}>
                      <div className={styles.left}>
                        <p className={styles.download}>
                          <b>DOWNLOAD</b> THE APP
                        </p>
                        <div
                          className={`${styles.download_google} ${styles.donwload_btn}`}
                        >
                          <div></div>
                        </div>
                        <div
                          className={`${styles.download_apple} ${styles.donwload_btn}`}
                        ></div>
                      </div>
                      <div className={styles.right}>
                        <Image src={qrcode} alt="scan qr code" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.phone_img}>
                <Image src={phone} alt="phone" />
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Home;
