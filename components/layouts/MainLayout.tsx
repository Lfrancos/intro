import Head from "next/head";
import { FC, ReactElement } from "react";
import { NavBar } from "../NavBar";
import styles from "./MainLayout.module.scss";

interface props {
  children: ReactElement,
}

export const MainLayout:FC<props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="This is the about page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
