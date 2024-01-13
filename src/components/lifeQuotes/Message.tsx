const Message = ({ styles, lifeQuotes }) => {
  return (
    <article className={styles.quotoesBox}>
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
