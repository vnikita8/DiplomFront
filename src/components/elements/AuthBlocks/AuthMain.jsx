import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AuthMain.module.css'

const AuthMain = () => {
  return (
    <div className={styles.Upper}>
        <div className={styles.Left}>
            <h1>Зарегистрируйтесь и получите максимум возможностей</h1>
            <p>Регистрация позволит добавлять специальности в список избранного, а также получать оповещения о новых местах!</p>
            <Link to='/Regist'>Регистрация</Link>
        </div>
        <div className={styles.Right}>
            <h1>Добро пожаловать</h1>
            <form>
                <input placeholder='Почта'></input>
                <input placeholder='Пароль'></input>
                <p>Забыли пароль?</p>
            </form>
            <button>Войти</button>
        </div>
    </div>
    
  )
}

export default AuthMain