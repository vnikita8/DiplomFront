import React from 'react'
import { Link } from 'react-router-dom'
import styles from './RegMain.module.css'


const RegMain = () => {
  return (
    <div className={styles.Upper}>
        <Left />
        <Right />        
    </div>
  )
}

const Left = () => {
    return (
        <div className={styles.Left}>
            <div className={styles.HeaderLeft}>
                <Link className={styles.Logo} to='/'>Transfer KemSU</Link>
                <Link className={styles.LeftButton} to="/Places">Вакантные места</Link>
            </div>
            
            <div className={styles.MainLeft}>
                <div className={styles.LeftTitles}>
                    <h1>Регистрация</h1>
                    <p>Начните пользоваться всеми преимуществами нашего сайта, создав аккаунт всего за 1 минуту.</p>
                </div>
                <form>
                    <input placeholder='Почта'></input>
                    <input placeholder='Пароль'></input>
                    <input placeholder='Подтверждение пароля'></input>
                    <Link to='/Reg/2'>Зарегистрироваться</Link>
                </form>
            </div>
        </div>
    )
}

const Right = () =>{
    return(
        <div className={styles.Right}>
            <div className={styles.HeaderRight}>
                <Link to="/Auth">Вход / Регистрация</Link>
            </div>
            <div className={styles.MainRight}>
                <h1>Есть аккаунт?</h1>
                <Link to='/Auth'>Войти</Link>
            </div>
        </div>
    )
}
export default RegMain