import React from 'react'
import styles from "./Paginator.module.css"

const Paginator = () => {
  return (
    <div className={styles.Upper}>
        <div className={styles.Left}>
            <p>Показано 0 из 0 записей</p>
        </div>

        <div className={styles.Right}>
            <div className={styles.Button}><img src='/arrow-left.svg'/> Назад</div>
            <p>Страница 1 из 1</p>
            <div className={styles.Button}><img src='/arrow-right.svg'/> Вперед</div>
        </div>

    </div>
  )
}

export default Paginator