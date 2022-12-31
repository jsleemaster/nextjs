import styles from '../styles/Home.module.css'
import dateStyles from '../styles/dateCheck.module.css'
import dayjs from 'dayjs'
import React from 'react'

export default function Home() {
  const [date, setDate] = React.useState(dayjs().format('YYYY-MM-DD HH:mm:ss'));
  React.useEffect(() => {
    setInterval(() => {
      setDate(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    }, 1000);
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <span className={dateStyles.date}>{date}</span>
      </main>
    </div>
  )
}
