"use client";

import { useEffect, useState } from "react";

export default function Famous() {
  const [message, setMesage] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/famous");
      } catch (error) {
        return error;
      }
    };
    getData();
  }, []);

  return <>{message}</>;
}
