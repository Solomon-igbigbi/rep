import Link from "next/link";
import React from "react";
import { Button, Logo, Text } from "../../atoms";
import styles from "./headers.module.scss";

const links = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "ABOUT US",
    path: "/",
  },
  {
    name: "REPORTS",
    path: "/",
  },
  {
    name: "CONTACT US",
    path: "/",
  },
  {
    name: "LOGIN",
    path: "/login",
  },
];

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.nav_logo}>
        <div className={styles.r_logo}>
          <Logo />
        </div>
        <div>
          <Text color="white" variant="h4">
            WEB
          </Text>
        </div>
      </div>
      <div className={styles.navigations}>
        {links.map((link) => {
          return (
            <Link key={link.name} href={link.path}>
              <span className={styles.nav_link}>{link.name}</span>
            </Link>
          );
        })}
        <Button onClick={() => window.location.replace("/register")}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
