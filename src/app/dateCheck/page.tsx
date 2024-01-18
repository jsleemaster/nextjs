"use client";

import {
  Container,
  Main,
  DateSpan,
  NextDateSpan,
} from "styles/dateCheck/style";

import useDateCheck from "hooks/dateCheck/useDateCheck";
import { diffDay, year } from "hooks/useDayjs";
import useInit from "hooks/useInit";

export default function DateCheck() {
  const mounted = useInit();
  const { nextYear, date, nextYearTime } = useDateCheck();

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
