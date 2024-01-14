import { useEffect, useState } from "react";

import * as styles from "./Message.css";

const Message = ({ lifeQuotes }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (lifeQuotes) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [lifeQuotes]);
  return (
    <article
      className={`${styles.quotoesBox} ${loading ? styles.scrollActive : ""}`}
    >
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
