import styles from '../styles/Home.module.css'
import dateStyles from '../styles/dateCheck.module.css'
import dayjs from 'dayjs'
import { useEffect, useState, } from 'react'

export default function Home() {
  const reach = dayjs().add(1, 'year').format('YYYY-MM-DD HH:mm:ss')
  console.log(reach, '<<<')
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'));
  const [reachDate, setReachDate] = useState(dayjs(reach).format('YYYY-MM-DD HH:mm:ss.SSS'));
  const [diffDate, setDiffDate] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setDate(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    }, 1000);
  }, [])

  useEffect(() => {
    setDiffDate(dayjs(date).diff(reach));
    setReachDate(dayjs(reach).subtract(diffDate).format("HH:mm:ss"))
  }, [date])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <span className={dateStyles.date}>{date}</span>
        {diffDate < 0 && <span className={dateStyles.reach_date}>남은 시간 {reachDate}</span>}
      </main>
    </div>
  )
}
