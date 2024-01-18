"use client";

import { section, main, span, nextDateSpan } from "styles/dateCheck/style.css";

import useDateCheck from "hooks/dateCheck/useDateCheck";
import { diffDay, year } from "hooks/useDayjs";
import useInit from "hooks/useInit";

export default function DateCheck() {
  const mounted = useInit();
  const { nextYear, date, nextYearTime } = useDateCheck();

  return (
    mounted && (
      <main className={main}>
        <section className={section}>
          <span className={span}>
            현재 : {date}
            <br />
            {year(nextYear)}년 까지 :
            <span className={nextDateSpan}>
              {" "}
              <b>{diffDay(nextYear, date)}일 </b>
              {nextYearTime}
            </span>
          </span>
        </section>
        <section className={section}></section>
      </main>
    )
  );
}
