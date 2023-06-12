import React, {useState, useEffect} from 'react'
import styles from './AuthMain.module.css'
import {Link, redirect, useNavigate} from 'react-router-dom';
import links from '../../../services/links';
import {useDispatch, useSelector} from "react-redux";

const AuthMain = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [code, setCode] = useState(500);
    const [data, setdata] = useState([]);

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
                <input placeholder='Почта' type="text" value={login} onChange={ event => setLogin(event.target.value)}></input>
                <input placeholder='Пароль' type="text" value={password} onChange={ event => setPassword(event.target.value) }></input>
                <p>Забыли пароль?</p>
            </form>
            <Link onClick={ async () => {
                // to={links.StudentProfile} 
                //Логика получения ответа от сервера
                try{
                    const url = 'https://transfer.kemsu.ru/api/v1/sign_in/student/';

                    const user = {
                        "email": login,
                        "password": password
                    };
                
                    const options = {
                        method: 'POST',
                        mode: "cors",
                        headers: {
                            "accept": "application/json",
                            'content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    };
                
                    
                    const response = await fetch(url, options)
                                            .then((response) => {
                                                setCode(response.status);
                                                return response.json();
                                            })
                                            .then( (data) => setdata(data))
                    

                    if(code == 200){
                        dispatch({type:"LOG_IN"})
                        dispatch({type:"SET_MAIL", mail: data.email})
                        navigate(links.StudentProfile)
                    } else {
                        // alert("Неправильный логин или пароль")
                    }

                } catch(err) {
                    console.log("Error:", err.message)
                }

            }}
            >Войти</Link>
        </div>
        </div>


    </div>
  )
}

function getData2(login, password){

    const url = 'https://transfer.kemsu.ru/api/v1/sign_in/student/';

    const user = {
        "email": login,
        "password": password
    };

    const options = {
        method: 'POST',
        mode: "cors",
        headers: {
            "accept": "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    
    const response = fetch(url, options)
                    .then((response) => {
                        console.log(response.json())
                    })

}



export default AuthMain