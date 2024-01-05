"use client";

import { Suspense } from "react";

import useFamous from "hooks/useFamous";

const Famous = async () => {
  const message = await useFamous();

  return (
    <Suspense fallback={<>로딩중..</>}>
      <>{message}</>
    </Suspense>
  );
};

export default Famous;
