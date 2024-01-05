"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";

import { diffDay, nowDateTime, year } from "app/hooks/useDayjs";
import useInit from "app/hooks/useInit";

import { Container, Main, DateSpan, NextDateSpan } from "./style";

export default function DateCheck() {
  const mounted = useInit();
  const nextYear = dayjs()
    .add(1, "year")
    .startOf("year")
    .format("YYYY-MM-DD HH:mm:ss");
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
    setnextYearTime(dayjs(nextYear).subtract(diffDate).format("HH:mm:ss"));
  }, [date, diffDate, nextYear]);

  return (
    mounted && (
      <Container>
        <Main>
          <DateSpan>{date}</DateSpan>
          {diffDate < 0 && (
            <NextDateSpan>
              {year(nextYear)}년 까지 남은 시간{" "}
              <b>D-{diffDay(nextYear, diffDate)}</b>
              {nextYearTime}
            </NextDateSpan>
          )}
        </Main>
      </Container>
    )
  );
}
