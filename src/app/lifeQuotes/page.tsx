"use client";

import { Suspense } from "react";

import useLifeQuotes from "hooks/lifeQuotes/useLifeQuotes";
import useNotification from "hooks/lifeQuotes/useNotification";

import * as styles from "./page.css";

export default function LifeQuotes() {
  const { notificationErrorMessage, notificationPermission } =
    useNotification();
  const { lifeQuotes, time } = useLifeQuotes();
  return (
    <>
      {notificationPermission !== "granted" && <>{notificationErrorMessage}</>}
      <Suspense fallback={<>로딩중...</>}>
        <article className={styles.quotoesBox}>
          <span className={styles.quotesTitle}>
            {lifeQuotes && lifeQuotes.title}
          </span>
          <span className={styles.quotesAuthor}>
            {lifeQuotes && lifeQuotes.author}
          </span>
        </article>
      </Suspense>
    </>
  );
}
