import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './RegMain.module.css'
import {useDispatch, useSelector} from "react-redux";
import links from '../../../services/links';


const RegMain = () => {
  return (
    <div className={styles.Upper}>
        <Left />
        <Right />        
    </div>
  )
}

const Left = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, setLogin] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")

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
                    <input placeholder='Почта' type="text" value={login} onChange={ event => setLogin(event.target.value)} />
                    <input placeholder='Пароль' type="text" value={password1} onChange={ event => setPassword1(event.target.value)} />
                    <input placeholder='Подтверждение пароля' type="text" value={password2} onChange={ event => setPassword2(event.target.value)} />

                    <button onClick={() => {
                        if(password1 != password2 || login=="" || password1==""){
                            alert("Неправильный логин или пароль");
                            return;
                        } else{
                            let result = [];
                            result.push(login);
                            result.push(password1);
                            dispatch({type:"SIGN_UP_ONE", sign_up: result});
                            navigate(links.Reg2);
                        }}}>Зарегистрироваться</button>

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