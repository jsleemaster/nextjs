import { useEffect, useRef, useState } from "react";

export default () => {
  const notiRef = useRef<Notification>(null);

  const [notificationPermission, setPermission] = useState("");
  const [notificationErrorMessage, setNotiErrorMessage] = useState("");
  const notiClick = () => {
    if (notiRef && notiRef.current) {
      notiRef.current.onclick = (event) => {
        event.preventDefault();
        window.focus();
        if (notiRef.current) {
          notiRef.current.close();
        }
      };
    }
  };
  const newNotify = async () => {
    new Notification("알림", { body: "새로운 명언이 왔어요" });
    notiClick();
  };

  const getPermittion = async () => {
    if (!("Notification" in window)) {
      setNotiErrorMessage("이 브라우저는 알림을 지원하지 않습니다.");
    } else {
      const permission = await Notification.requestPermission();
      setPermission(permission);
      if (permission === "denied") {
        setNotiErrorMessage("알림 권한이 거부되어있습니다.");
      }
    }
  };

  useEffect(() => {
    getPermittion();
  }, []);
  return { notificationErrorMessage, notificationPermission, newNotify };
};
