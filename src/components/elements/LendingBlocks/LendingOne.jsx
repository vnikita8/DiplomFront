import React from 'react'
import styles from "./LendingOne.module.css"

const LendingOne = () => {
  return (
    <div className={styles.Upper}>
        <div className={styles.Left}>
            <div className={styles.HeadBlock}>
                <p>Всё ещё платишь за учёбу?</p>
                <p><span className={styles.MarkLive}>Бюджет</span> ждёт тебя!</p>
            </div>
            <p className={styles.TextBlock}>Сервис даёт возможность найти свободное место на бюджет. 
                <br />Не жди, начни планировать свое будущее уже сейчас!</p>
            <button className={styles.Button}>Перевестись!</button>
        </div>

        <div className={styles.Right}>
            <img className={styles.Image} src='/student.jpg' />
        </div>
    </div>
  )
}

export default LendingOne