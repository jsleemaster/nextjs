"use client";

import DateCheckContainer from "components/dateCheck/DateCheckContainer";
import DiffrentDate from "components/dateCheck/DiffrentDate";
import useDateCheck from "hooks/dateCheck/useDateCheck";
import { diffDay, year } from "hooks/useDayjs";
import useInit from "hooks/useInit";
import {
  main,
  header,
  span,
  footer,
  section,
  nextDateSpan,
} from "styles/dateCheck/style.css";

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
          <DateCheckContainer title="날짜 차이계산">
            <DiffrentDate />
          </DateCheckContainer>
          <DateCheckContainer title="경과 시간계산"></DateCheckContainer>
          <DateCheckContainer title="시간 변환"></DateCheckContainer>
        </section>
        {/* <aside>
          <h2>광고</h2>
          <p>광고 내용입니다.</p>
        </aside> */}
        <footer className={footer}>jsleemaster@gmail.com @{year()}</footer>
      </main>
    )
  );
}
