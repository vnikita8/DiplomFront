import React from 'react'
import styles from "./Header.module.css"
import {Link} from 'react-router-dom';
import links from '../../../services/links';
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.isAuth)

  const result = isAuth? <HeaderAuth /> : <HeaderWithoutAuth />

  return (<>{result}</>)

}


const HeaderWithoutAuth = () => {

  return(
    <div className={styles.Header}>
        <Link className={styles.Logo} to={links.Home}>Transfer KemSU</Link>
        <div className={styles.Buttons}>
            <Link to={links.Places}>Вакантные места</Link>
            <Link to={links.Auth}>Вход / Регистрация</Link>
        </div>
    </div>
  )
  
}


const HeaderAuth = () => {
  return(
    <div className={styles.Header}>
        <Link className={styles.Logo} to={links.Home}>Transfer KemSU</Link>
        <div className={styles.Buttons}>
            <Link to={links.Places}>Вакантные места</Link>
            <Link to={links.StudentProfile}>Профиль</Link>
            <Link to={links.Home} onClick={ () => dispatch({type:"LOG_OUT"})}>Выход</Link>
        </div>
    </div>
  )
}


export default Header