import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link";
export default function Home() {
  return (
    <>
      <div>
        <h1>Welcome </h1>
      </div>

      <Link href="/posts"> POST </Link>
    </>
  );
}
