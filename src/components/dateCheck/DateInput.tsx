import { ChangeEvent } from "react";
import { dateInputBox, dateLabel } from "styles/dateCheck/input.css";

interface DateInputTypes {
  label: string;
  tabIndex: number;
  placeholder: string;
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
        type="number"
        tabIndex={props?.tabIndex}
        placeholder={props?.placeholder}
        id={props?.id}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
export default DateInput;
