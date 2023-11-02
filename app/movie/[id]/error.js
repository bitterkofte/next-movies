"use client";
import React from "react";
import Link from "next/link";
import styles from './notfound.module.css'

function Error() {
  return (
    <div className={styles.cont} >
      <h1>An <span className={styles.red}>error</span> has occurred. Sorry for that!</h1>
      <Link
        href="/"
        style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
      >
        Go home
      </Link>
    </div>
  );
}

export default Error;