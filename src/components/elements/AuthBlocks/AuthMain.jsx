import React from 'react'
import styles from './AuthMain.module.css'
import {Link} from 'react-router-dom';
import links from '../../../services/links';

const AuthMain = () => {
  return (
    <div className={styles.Upper}>
        <div className={styles.Left}>
            <div className={styles.HeaderLeft}>
                <Link className={styles.Logo} to={links.Home}>Transfer KemSU</Link>
            </div>
            <div className={styles.MainLeft}>
                <h1>Зарегистрируйтесь и получите максимум возможностей</h1>
                <p>Регистрация позволит добавлять специальности в список избранного, а также получать оповещения о новых местах!</p>
                <Link to={links.Reg1}>Регистрация</Link>
            </div>
        </div>
        <div className={styles.Right}>
            <div className={styles.HeaderRight}>
                <Link to={links.Places}>Вакантные места</Link>
                <Link to={links.Auth}>Вход / Регистрация</Link>
            </div>
            <div className={styles.MainRight}>
            <h1>Добро пожаловать</h1>
            <form>
                <input placeholder='Почта'></input>
                <input placeholder='Пароль'></input>
                <p>Забыли пароль?</p>
            </form>
            <Link to={links.Places}>Войти</Link>
        </div>
        </div>


    </div>
  )
}

export default AuthMain