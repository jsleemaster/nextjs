import dayjs from "dayjs";
import { useEffect, useState } from "react";

import { diffDay, nowDateTime, year } from "hooks/useDayjs";

export default () => {
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
  return { nextYear, date, nextYearTime };
};
