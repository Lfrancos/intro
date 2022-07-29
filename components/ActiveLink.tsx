import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./ActiveLink.module.scss";
import { FC } from "react";

interface Props  {
  href: string,
  label: string
}

export const ActiveLink: FC<Props> = ({ href , label }) => {
  const { route } = useRouter();
  return (
    <>
      <Link href={href}>
        <p className={`${styles.base} ${route === href ? styles.active : null}`}>{label}</p>
      </Link>
    </>
  );
};
