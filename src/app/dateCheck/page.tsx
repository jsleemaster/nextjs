"use client";

import {
  main,
  header,
  span,
  section,
  nextDateSpan,
  article,
} from "styles/dateCheck/style.css";

import DiffrentDate from "components/dateCheck/DiffrentDate";
import useDateCheck from "hooks/dateCheck/useDateCheck";
import { diffDay, year } from "hooks/useDayjs";
import useInit from "hooks/useInit";

export default function DateCheck() {
  const mounted = useInit();
  const { nextYear, date, nextYearTime } = useDateCheck();

  return (
    mounted && (
      <main className={main}>
        <header className={header}>
          <span className={span}>
            <b>지금 시간은? </b>
            {date}
          </span>
          <span className={nextDateSpan}>
            <b>{year(nextYear)}년 까지 : </b>
            {diffDay(nextYear, date)}일{nextYearTime}
          </span>
        </header>
        <section className={section}>
          <article>
            <h3>날짜 차이 계산</h3>
            <DiffrentDate />
          </article>
          <article className={article}>
            <h3>경과 시간계산</h3>
          </article>
          <article className={article}>
            <h3>시간 변환</h3>
          </article>
        </section>
        {/* <aside>
          <h2>광고</h2>
          <p>광고 내용입니다.</p>
        </aside> */}
        <footer>jsleemaster@gmail.com @{year()}</footer>
      </main>
    )
  );
}
