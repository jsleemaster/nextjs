import * as styles from "./Message.css";

const Message = ({ lifeQuotes }) => {
  return (
    <article className={`${styles.quotoesBox}`}>
      <span className={styles.quotesTitle}>
        {lifeQuotes && lifeQuotes.title}
      </span>
      <span className={styles.quotesAuthor}>
        {lifeQuotes && lifeQuotes.author}
      </span>
    </article>
  );
};

export default Message;
