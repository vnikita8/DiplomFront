import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderAuth.module.css'

const HeaderAuth = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.Left}>
                <Link className={styles.Logo} to='/'>Transfer KemSU</Link>
            </div>
            
            <div className={styles.Right}>
                <Link to="/test">Вакантные места</Link>
                <Link to="/Auth">Вход / Регистрация</Link>
            </div>
            
        </div>
      )
}

export default HeaderAuth