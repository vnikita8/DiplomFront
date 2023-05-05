import React from 'react'
import styles from './Footer.module.css'
import {Link} from 'react-router-dom';
import links from '../../../services/links';

const Footer = () => {
  return (
    <div className={styles.Footer}>
        <div className={styles.TextBlock}>
          <p className={styles.BlockTitle}>Полезные ссылки</p>
          <hr />
          <div>
            <Link to={links.Home}>Главная страница</Link>
            <Link to={links.Places}>Вакантные места</Link>
            <Link to={links.Auth}>Авторизация</Link>
            <Link to={links.Reg1}>Регистрация</Link>
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