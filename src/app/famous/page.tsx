"use client";

import { useEffect, useState } from "react";
export default function Famous() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/famous");
        const { data } = await res.json();
        setMessage(data);
      } catch (error) {
        return error;
      }
    };
    getData();
  }, []);

  return <>{message}</>;
}
