import React from 'react'
import styles from "./Header.module.css"
import {Link} from 'react-router-dom';
import links from '../../../services/links';

const Header = () => {
  return (
    <div className={styles.Header}>
        <Link className={styles.Logo} to={links.Home}>Transfer KemSU</Link>
        <div className={styles.Buttons}>
            <Link to={links.Places}>Вакантные места</Link>
            <Link to={links.Auth}>Вход / Регистрация</Link>
        </div>
        
    </div>
  )
}

export default Header