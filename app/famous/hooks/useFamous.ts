"use client";
import useSWR from "swr";

import * as Config from "config";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default async () => {
  const { data, error, isLoading } = useSWR(`${Config.server}/api`, fetcher);
  console.log(`data ${data}`);
  return data;
};
