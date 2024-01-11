import { useEffect, useRef, useState } from "react";

import { LifeQuotesType } from "types/lifeQuotes/type";

export default () => {
  const [time, setTime] = useState(2000);
  const [lifeQuotes, setLifeQuotes] = useState<LifeQuotesType>();
  const setTimeRef = useRef<NodeJS.Timer>();

  const getNewMessage = (data: LifeQuotesType[]) => {
    if (data.length === 0) {
      getData();
      return;
    }
    if (setTimeRef.current) clearTimeout(setTimeRef.current);
    const randomIdx = Math.floor(Math.random() * data.length);
    const lifeQuotesMessage = data.splice(randomIdx, 1)[0];
    setLifeQuotes(lifeQuotesMessage);
    setTimeRef.current = setTimeout(() => {
      getNewMessage(data);
      const noti = new Notification("알림", { body: "명언이 왔어요" });
    }, time);
  };
  const getData = async () => {
    try {
      const res = await fetch("/api/lifeQuotes/");
      const { data } = await res.json();
      getNewMessage(data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getData();
    return () => {
      clearTimeout(setTimeRef.current);
    };
  }, []);
  return { time, lifeQuotes, setTime };
};
