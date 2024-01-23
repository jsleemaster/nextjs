import { ReactNode } from "react";
import { article } from "styles/dateCheck/style.css";

interface DateContainerType {
  title: string;
  children?: ReactNode;
}

const DateCheckContainer = ({ children, title }: DateContainerType) => {
  return (
    <article className={article}>
      <h3>{title}</h3>
      {children}
    </article>
  );
};
export default DateCheckContainer;
