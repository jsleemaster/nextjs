import DateInput from "./DateInput";

const DiffrentDate = () => {
  return (
    <>
      <article>
        <DateInput
          tabIndex={1}
          placeholder="년도"
          id="start_year_date"
          label="년"
        />
        <DateInput
          tabIndex={2}
          placeholder="월"
          id="start_month_date"
          label="월"
        />
        <DateInput
          tabIndex={3}
          placeholder="일"
          id="start_day_date"
          label="일"
        />
      </article>
      <article>
        <DateInput
          tabIndex={4}
          placeholder="년도"
          id="end_year_date"
          label="년"
        />
        <DateInput
          tabIndex={5}
          placeholder="월"
          id="end_month_date"
          label="월"
        />
        <DateInput tabIndex={6} placeholder="일" id="end_day_date" label="일" />
      </article>
      <button type="submit" tabIndex={7}>
        입력
      </button>
    </>
  );
};
export default DiffrentDate;
