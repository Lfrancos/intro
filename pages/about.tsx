import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
// import styles from "../styles/globals.css";

export default function About() {
  return (
    <MainLayout>
      <>
        <h1 className={"title"}>
          ir a <Link href="/">Home!</Link>
        </h1>

        <p className={"description"}>
          Get started by editing <code className={"code"}>pages/index.js</code>
        </p>
      </>
    </MainLayout>
  );
}
