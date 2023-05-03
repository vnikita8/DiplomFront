import React from 'react'
import styles from "./Header.module.css"
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.Header}>
        <Link className={styles.Logo} to='/'>Transfer KemSU</Link>
        <div className={styles.Buttons}>
            <Link to="/test">Вакантные места</Link>
            <Link to="/Auth">Вход / Регистрация</Link>
        </div>
        
    </div>
  )
}

export default Header