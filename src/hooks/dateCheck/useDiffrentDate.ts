import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);
import { useReducer } from "react";

interface DateState {
  year: string | number;
  month: string | number;
  day: string | number;
}

interface DifferentDateState {
  start: DateState;
  end: DateState;
  result: DateState;
  reset: string;
}

const init: DifferentDateState = {
  start: { year: "", month: "", day: "" },
  end: { year: "", month: "", day: "" },
  result: { year: "", month: "", day: "" },
  reset: "",
};
type DiifrentDateActionType =
  | "start_year"
  | "start_month"
  | "start_day"
  | "end_year"
  | "end_month"
  | "end_day"
  | "reset"
  | "result";

const reducer = (
  state: DifferentDateState,
  action: { type: DiifrentDateActionType; value?: string; result?: DateState }
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
    case "result":
      return { ...state, result: { ...action.result } };
    case "reset":
      return init;
  }
};

export default () => {
  const [diffState, diffAction] = useReducer(reducer, init);

  const reset = () => diffAction({ type: "reset" });
  const submit = () => {
    const startDate = dayjs(
      `${diffState.start.year} ${diffState.start.month} ${diffState.start.day}`
    );
    const endDate = dayjs(
      `${diffState.end.year} ${diffState.end.month} ${diffState.end.day}`
    );
    const day = endDate.diff(startDate, "day");
    const year = endDate.diff(startDate, "year");
    const month = endDate.diff(startDate, "month");

    diffAction({ type: "result", result: { day, year, month } });
  };

  return { diffState, diffAction, submit, reset };
};
