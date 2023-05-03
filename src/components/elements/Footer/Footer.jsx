import React from 'react'
import styles from './Footer.module.css'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.Footer}>
        <div className={styles.TextBlock}>
          <p className={styles.BlockTitle}>Полезные ссылки</p>
          <hr />
          <div>
            <Link to="/">Главная страница</Link>
            <p>Вакантные места</p>
            <p>Регистрация</p>
            <p>Личный кабинет</p>
          </div>
        </div>
        
        <div className={styles.TextBlock}>
          <p className={styles.BlockTitle}>Конакты</p>
          <hr></hr>
          <div>
            <p>Тел.:</p>
            <p>Vk: </p>
          </div>
        </div>
    </div>
  )
}

export default Footer