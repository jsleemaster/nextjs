import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);
import { useReducer, useState } from "react";
interface DateState {
  year: string;
  month: string;
  day: string;
}

interface DifferentDateState {
  start: DateState;
  end: DateState;
  result: string;
  reset: string;
}

const init: DifferentDateState = {
  start: { year: "", month: "", day: "" },
  end: { year: "", month: "", day: "" },
  result: "",
  reset: "",
};
type DiifrentDateActionType =
  | "start_year"
  | "start_month"
  | "start_day"
  | "end_year"
  | "end_month"
  | "end_day"
  | "reset";
const reducer = (
  state: DifferentDateState,
  action: { type: DiifrentDateActionType; value?: string }
) => {
  switch (action.type) {
    case "start_year":
      return { ...state, start: { ...state.start, year: action.value } };
    case "start_month":
      return { ...state, start: { ...state.start, month: action.value } };
    case "start_day":
      return { ...state, start: { ...state.start, day: action.value } };
    case "end_year":
      return { ...state, end: { ...state.end, year: action.value } };
    case "end_month":
      return { ...state, end: { ...state.end, month: action.value } };
    case "end_day":
      return { ...state, end: { ...state.end, day: action.value } };
    case "reset":
      return init;
  }
};
interface DifferentDateResultState {
  elapsedDays: number;
  years: number;
  months?: number;
  remainingDays?: number;
}
export default () => {
  const [diffState, setDiffrentDate] = useReducer(reducer, init);
  const [result, setResult] = useState<DifferentDateResultState>();

  const reset = () => setDiffrentDate({ type: "reset" });
  const submit = () => {
    const startDate = dayjs(
      `${diffState.start.year} ${diffState.start.month} ${diffState.start.day}`
    );
    const endDate = dayjs(
      `${diffState.end.year} ${diffState.end.month} ${diffState.end.day}`
    );

    const elapsedDays = endDate.diff(startDate, "day");
    const years = endDate.diff(startDate, "year");

    setResult({
      elapsedDays,
      years,
    });
  };

  return { diffState, setDiffrentDate, submit, reset, result };
};
