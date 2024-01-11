"use client";

import { Suspense } from "react";

import useLifeQuotes from "hooks/lifeQuotes/useLifeQuotes";
import usePermittion from "hooks/lifeQuotes/usePermittion";

export default function LifeQuotes() {
  const { notificationErrorMessage, notificationPermission } = usePermittion();
  const { lifeQuotes, time } = useLifeQuotes();

  return (
    <>
      테스트
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
