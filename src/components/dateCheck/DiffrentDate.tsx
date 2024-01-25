import {
  dateInputButton,
  dateInputContainer,
} from "styles/dateCheck/input.css";

import useDiffrentDate from "hooks/dateCheck/useDiffrentDate";

import DateInput from "./DateInput";

const DiffrentDate = () => {
  const { diffState, setDiffrentDate, submit, reset } = useDiffrentDate();

  return (
    <>
      <article className={dateInputContainer}>
        <DateInput
          tabIndex={1}
          placeholder="년도"
          id="start_year_date"
          label="년"
          maxLength={4}
          onChange={(e) =>
            setDiffrentDate({ type: "start_year", value: e.target.value })
          }
        />
        <DateInput
          tabIndex={2}
          placeholder="월"
          id="start_month_date"
          label="월"
          maxLength={2}
          onChange={(e) =>
            setDiffrentDate({ type: "start_month", value: e.target.value })
          }
        />
        <DateInput
          tabIndex={3}
          placeholder="일"
          id="start_day_date"
          label="일"
          maxLength={2}
          onChange={(e) =>
            setDiffrentDate({ type: "start_day", value: e.target.value })
          }
        />
      </article>
      <article className={dateInputContainer}>
        <DateInput
          tabIndex={4}
          placeholder="년도"
          id="end_year_date"
          label="년"
          maxLength={4}
          onChange={(e) =>
            setDiffrentDate({ type: "end_year", value: e.target.value })
          }
        />
        <DateInput
          tabIndex={5}
          placeholder="월"
          id="end_month_date"
          label="월"
          maxLength={2}
          onChange={(e) =>
            setDiffrentDate({ type: "end_month", value: e.target.value })
          }
        />
        <DateInput
          tabIndex={6}
          placeholder="일"
          id="end_day_date"
          label="일"
          maxLength={2}
          onChange={(e) =>
            setDiffrentDate({ type: "end_day", value: e.target.value })
          }
        />
      </article>
      <button
        type="submit"
        tabIndex={8}
        className={dateInputButton}
        onClick={reset}
      >
        초기화
      </button>
      <button
        type="submit"
        tabIndex={7}
        className={dateInputButton}
        onClick={submit}
      >
        입력
      </button>
    </>
  );
};
export default DiffrentDate;
