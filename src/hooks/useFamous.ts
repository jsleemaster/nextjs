import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default async () => {
  const { data, error, isLoading } = useSWR(`/api`, fetcher);
  console.log(`data ${data}`);
  return data;
};
