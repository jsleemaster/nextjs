import useDiffrentDate from "hooks/dateCheck/useDiffrentDate";
import {
  dateInputButton,
  dateInputContainer,
  dateButtonContainer,
  dateInputTitle,
} from "styles/dateCheck/input.css";

import DateInput from "./DateInput";

const DiffrentDate = () => {
  const { diffState, diffAction, submit, reset } = useDiffrentDate();

  return (
    <>
      <article className={dateInputContainer}>
        <h3 className={dateInputTitle}>시작 일</h3>
        <DateInput
          tabIndex={1}
          placeholder="년도"
          id="start_year_date"
          label="년"
          maxLength={4}
          onChange={(e) =>
            diffAction({ type: "start_year", value: e.target.value })
          }
        />
        <DateInput
          tabIndex={2}
          placeholder="월"
          id="start_month_date"
          label="월"
          max={12}
          maxLength={2}
          onChange={(e) =>
            diffAction({ type: "start_month", value: e.target.value })
          }
        />
        <DateInput
          tabIndex={3}
          placeholder="일"
          id="start_day_date"
          label="일"
          max={31}
          maxLength={2}
          onChange={(e) =>
            diffAction({ type: "start_day", value: e.target.value })
          }
        />
      </article>
      <article className={dateInputContainer}>
        <h3 className={dateInputTitle}>종료 일</h3>
        <DateInput
          tabIndex={4}
          placeholder="년도"
          id="end_year_date"
          label="년"
          maxLength={4}
          onChange={(e) =>
            diffAction({ type: "end_year", value: e.target.value })
          }
        />
        <DateInput
          tabIndex={5}
          placeholder="월"
          id="end_month_date"
          label="월"
          maxLength={2}
          max={12}
          onChange={(e) =>
            diffAction({ type: "end_month", value: e.target.value })
          }
        />
        <DateInput
          tabIndex={6}
          placeholder="일"
          id="end_day_date"
          label="일"
          maxLength={2}
          max={31}
          onChange={(e) =>
            diffAction({ type: "end_day", value: e.target.value })
          }
        />
      </article>
      <article>
        {diffState?.result && (
          <>
            {diffState?.result?.year && <span>{diffState?.result?.year}</span>}
            {diffState?.result?.month && (
              <span>{diffState?.result?.month}</span>
            )}
            <span>{diffState.result.day}</span>
          </>
        )}
      </article>
      <article className={dateButtonContainer}>
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
          계산하기
        </button>
      </article>
    </>
  );
};
export default DiffrentDate;
