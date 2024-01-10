import { useEffect, useState } from "react";

export default () => {
  const [notificationPermission, setPermission] = useState("");
  const [notificationErrorMessage, setNotiErrorMessage] = useState("");

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
  return { notificationErrorMessage, notificationPermission };
};
