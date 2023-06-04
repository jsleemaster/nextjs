"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";

import { Container, Main, DateSpan, NextDateSpan } from "./style";

export default function DateCheck() {
  const nextYear = dayjs()
    .add(1, "year")
    .startOf("year")
    .format("YYYY-MM-DD HH:mm:ss.SSS");

  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD HH:mm:ss.SSS"));
  const [nextYearTime, setnextYearTime] = useState(
    dayjs(nextYear).format("YYYY-MM-DD HH:mm:ss.SSS")
  );
  const [diffDate, setDiffDate] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setDate(dayjs().format("YYYY-MM-DD HH:mm:ss.SSS"));
    }, 100);
  }, []);

  useEffect(() => {
    setDiffDate(dayjs(date).diff(nextYear));
    setnextYearTime(dayjs(nextYear).subtract(diffDate).format("HH:mm:ss.SSS"));
  }, [date, diffDate, nextYear]);

  return (
    <Container>
      <Main>
        <DateSpan>{date}</DateSpan>
        {diffDate < 0 && (
          <NextDateSpan>
            {dayjs(nextYear).format("YYYY")}년 까지 남은 시간{" "}
            <b>D-{dayjs(nextYear).diff(date, "day")}</b>
            {nextYearTime}
          </NextDateSpan>
        )}
      </Main>
    </Container>
  );
}
