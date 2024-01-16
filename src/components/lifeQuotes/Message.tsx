import { useEffect, useState } from "react";

import * as styles from "./Message.css";

const Message = ({ lifeQuotes }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (lifeQuotes) {
      setLoading(false);
      setTimeout(() => {
        setLoading(true);
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
