import { ChangeEvent } from "react";
import { dateInputBox, dateLabel } from "styles/dateCheck/input.css";

interface DateInputTypes {
  label: string;
  tabIndex: number;
  placeholder: string;
  maxLength?: number;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DateInput = ({ label, onChange, ...props }: DateInputTypes) => {
  return (
    <div className={dateInputBox}>
      {label && (
        <label htmlFor={props?.id} className={dateLabel}>
          {label}
        </label>
      )}
      <input
        onInput={(e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.value.length > e.target.maxLength)
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }}
        type="number"
        tabIndex={props?.tabIndex}
        placeholder={props?.placeholder}
        id={props?.id}
        onChange={(e) => onChange(e)}
        maxLength={props?.maxLength}
        min={0}
      />
    </div>
  );
};
export default DateInput;
