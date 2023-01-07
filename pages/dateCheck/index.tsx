import dateStyles from "styles/dateCheck.module.css";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

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
  }, [date]);

  return (
    <div className={dateStyles.container}>
      <main className={dateStyles.main}>
        <span className={dateStyles.date}>{date}</span>
        {diffDate < 0 && (
          <span className={dateStyles.next_year_date}>
            {dayjs(nextYear).format("YYYY")}년 까지 남은 시간{" "}
            <b>D-{dayjs(nextYear).diff(date, "day")}</b>
            {nextYearTime}
          </span>
        )}
      </main>
    </div>
  );
}
