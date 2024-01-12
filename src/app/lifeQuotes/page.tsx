"use client";

import { Suspense } from "react";

import useLifeQuotes from "hooks/lifeQuotes/useLifeQuotes";
import useNotification from "hooks/lifeQuotes/useNotification";

export default function LifeQuotes() {
  const { notificationErrorMessage, notificationPermission } =
    useNotification();
  const { lifeQuotes, time } = useLifeQuotes();
  return (
    <>
      <Suspense fallback={<>로딩중...</>}>
        {notificationPermission !== "granted" && (
          <>{notificationErrorMessage}</>
        )}
        {lifeQuotes && lifeQuotes.author}
        {lifeQuotes && lifeQuotes.title}
      </Suspense>
    </>
  );
}
