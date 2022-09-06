import React from "react"; // { useEffect, useState }
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // const [state, setState] = useState<{ width: number; height: number }>({});

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setState({ width: window.innerWidth, height: window.innerHeight });
  //   }
  // });

  return (
    <>
      {/* <div>{state?.width}</div> */}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
