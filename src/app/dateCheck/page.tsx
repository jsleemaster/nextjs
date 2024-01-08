"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";

import { diffDay, nowDateTime, year } from "hooks/useDayjs";
import useInit from "hooks/useInit";

import { Container, Main, DateSpan, NextDateSpan } from "./style";

export default function DateCheck() {
  const mounted = useInit();
  const [nextYear, _] = useState(
    dayjs().add(1, "year").startOf("years").format("YYYY-MM-DD HH:mm:ss")
  );
  const [date, setDate] = useState(nowDateTime());
  const [nextYearTime, setnextYearTime] = useState(nowDateTime());
  const [diffDate, setDiffDate] = useState(0);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setDate(nowDateTime());
    }, 100);

    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    setDiffDate(dayjs(date).diff(nextYear));
    setnextYearTime(dayjs(nextYear).subtract(diffDate).format("HH시mm분ss초"));
  }, [date, diffDate, nextYear]);

  return (
    mounted && (
      <Container>
        <Main>
          <DateSpan>
            현재 : {date}
            <br />
            {year(nextYear)}년 까지 :
            <NextDateSpan>
              {" "}
              <b>{diffDay(nextYear, date)}일 </b>
              {nextYearTime}
            </NextDateSpan>
          </DateSpan>
        </Main>
      </Container>
    )
  );
}
