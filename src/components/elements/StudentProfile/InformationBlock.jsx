import React from 'react'
import links from '../../../services/links'
import styles from "./InformationBlock.module.css"


const InformationBlock = () => {
    let email = "vnikita@kemsu.ru"
  return (
    <div className={styles.AllBlock}>
        <div className={styles.Row}>
            <p className={styles.RowHeader}>Электронная почта:</p> <p className={styles.RowValue}>{email}</p>
        </div>
        <div className={styles.Row}>
            <p className={styles.RowHeader}>Фамилия:</p> <p className={styles.RowValue}>{email}</p>
        </div>
        <div className={styles.Row}>
            <p className={styles.RowHeader}>Имя:</p> <p className={styles.RowValue}>{email}</p>
        </div>
        <div className={styles.Row}>
            <p className={styles.RowHeader}>Отчество:</p> <p className={styles.RowValue}>{email}</p>
        </div>
        <div className={styles.Row}>
            <p className={styles.RowHeader}>Учебное заведение:</p> <p className={styles.RowValue}>{email}</p>
        </div>
        <div className={styles.Row}>
            <p className={styles.RowHeader}>Город:</p> <p className={styles.RowValue}>{email}</p>
        </div>
        <div className={styles.Row}>
            <p className={styles.RowHeader}>Оповещения:</p> <p className={styles.RowValue}>{email}</p>
        </div>
        
    </div>
  )
}

export default InformationBlock