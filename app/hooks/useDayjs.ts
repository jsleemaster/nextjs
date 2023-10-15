import dayjs from "dayjs";

export const nowDateTime = () => dayjs().format("YYYY-MM-DD HH:mm:ss");
export const year = (date?: string) => dayjs(date ?? "").format("YYYY");
export const diffDay = (prev: string, diff: number) =>
  dayjs(prev).diff(diff, "day");
