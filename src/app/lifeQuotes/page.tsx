"use client";

import dynamic from "next/dynamic";

import useLifeQuotes from "hooks/lifeQuotes/useLifeQuotes";
import useNotification from "hooks/lifeQuotes/useNotification";
import useInit from "hooks/useInit";
import * as styles from "styles/lifeQuotes/style.css";

import Loading from "../loading";
const LifeQuotesMessage = dynamic(
  () => import("components/lifeQuotes/Message"),
  { ssr: false, loading: () => <Loading /> }
);

export default function LifeQuotes() {
  const mounted = useInit();
  const { notificationErrorMessage, notificationPermission } =
    useNotification();
  const { lifeQuotes, setTime, time } = useLifeQuotes();
  return (
    mounted && (
      <>
        <section className={styles.sectionTitle}>명언 알리미</section>

        {notificationPermission !== "granted" && (
          <section>{notificationErrorMessage}</section>
        )}
        <section className={styles.messageSection}>
          <LifeQuotesMessage lifeQuotes={lifeQuotes} />
        </section>
        <section className={styles.sectionBottom}>
          <label htmlFor="time" className={styles.label}>
            시간 선택
          </label>
          <select
            onChange={(e) => setTime(Number(e.target.value))}
            id="time"
            className={styles.select}
            value={time}
          >
            <option value={900000}>10분</option>
            <option value={1800000}>30분</option>
            <option value={3600000}>1시간</option>
          </select>
        </section>
      </>
    )
  );
}
