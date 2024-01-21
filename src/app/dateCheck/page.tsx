"use client";

import * as styles from "styles/dateCheck/style.css";

import useDateCheck from "hooks/dateCheck/useDateCheck";
import { diffDay, year } from "hooks/useDayjs";
import useInit from "hooks/useInit";

export default function DateCheck() {
  const mounted = useInit();
  const { nextYear, date, nextYearTime } = useDateCheck();

  return (
    mounted && (
      <main className={styles.main}>
        <section className={styles.sectionHeader}>
          <span className={styles.span}>
            <b>지금 시간은? </b>
            {date}
          </span>
          <span className={styles.nextDateSpan}>
            <b>{year(nextYear)}년 까지 : </b>
            {diffDay(nextYear, date)}일{nextYearTime}
          </span>
        </section>
        <section className={styles.section}>
          <article>
            <h3>날짜 차이 계산</h3>
          </article>
          <article className={styles.article}>
            <h3>경과 시간계산</h3>
          </article>
          <article className={styles.article}>
            <h3>시간 변환</h3>
          </article>
        </section>
      </main>
    )
  );
}
