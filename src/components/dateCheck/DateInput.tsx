import { dateInputBox } from "styles/dateCheck/input.css";

interface DateInputTypes {
  label: string;
  tabIndex: number;
  placeholder: string;
  id: string;
}

const DateInput = ({ label, ...props }: DateInputTypes) => {
  return (
    <div className={dateInputBox}>
      {label && <label htmlFor={props?.id}>{label}</label>}
      <input
        type="number"
        tabIndex={props?.tabIndex}
        placeholder={props?.placeholder}
        id={props?.id}
      />
    </div>
  );
};
export default DateInput;
