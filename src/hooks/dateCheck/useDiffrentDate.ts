import { useReducer } from "react";
interface DiffrentDateState {
  start_year: string;
  start_month: string;
  start_day: string;
  end_year: string;
  end_month: string;
  end_day: string;
}
const init: DiffrentDateState = {
  start_year: "",
  start_month: "",
  start_day: "",
  end_year: "",
  end_month: "",
  end_day: "",
};

type DiffrentDateAction = keyof DiffrentDateState;
const reducer = (
  state: DiffrentDateState,
  action: { type: DiffrentDateAction; value: string }
) => {
  switch (action.type) {
    case "start_year":
      return { ...state, start_year: action.value };
    case "start_month":
      return { ...state, start_month: action.value };
    case "start_day":
      return { ...state, start_day: action.value };
    case "end_year":
      return { ...state, end_year: action.value };
    case "end_month":
      return { ...state, end_month: action.value };
    case "end_day":
      return { ...state, end_day: action.value };
  }
};
export default () => {
  const [diffState, setDiffrentDate] = useReducer(reducer, init);

  return { diffState, setDiffrentDate };
};
