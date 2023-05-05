import React from 'react'
import { Link } from 'react-router-dom'
import styles from './RegMainNext.module.css'

const RegMainNext = () => {
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
                    <h1>Основные данные</h1>
                    <p>Пожалуйста, заполните поля для полноценного использования всех возможностей системы!</p>
                </div>
                <form>
                    <input placeholder='Имя'></input>
                    <input placeholder='Фамилия'></input>
                    <input placeholder='Курс'></input>
                    <input placeholder='Уровень образования'></input>
                    <div className={styles.Buttons}>
                        <Link className={styles.ButtonLink} to='/Places'>Регистрация</Link>
                        <Link className={styles.GrayButtonLink} to='/Places'>Ввести позже</Link>
                    </div>
                    
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
                <Link to='/Reg/1'>Назад</Link>
            </div>
        </div>
    )
}

export default RegMainNext