import { Link, useNavigate  } from 'react-router-dom'
import styles from './RegMainNext.module.css'
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import links from '../../../services/links';

const RegMainNext = () => {
  return (
    <div className={styles.Upper}>
        <Left />
        <Right />        
    </div>
  )
}

const Left = () => {
    const navigate = useNavigate();
    const [first_name, setFirstName] = useState("defaulth");
    const [middle_name, setMiddleName] = useState("defaulth");
    const [last_name, setLastName] = useState("defaulth");
    const [city, setSity] = useState("Kemerovo");
    const [phone, setPhone] = useState("88005553535");
    const [code, setCode] = useState(500);
    const prevData = useSelector(state => state.sign_up)
    console.log(prevData);

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
                    <input placeholder='Имя' value={middle_name} onChange={ event => setMiddleName(event.target.value)}></input>
                    <input placeholder='Фамилия' value={first_name} onChange={ event => setFirstName(event.target.value)}></input>
                    <input placeholder='Отчество' value={last_name} onChange={ event => setLastName(event.target.value)}></input>
                    <input placeholder='Номер телефона' value={phone} onChange={ event => setPhone(event.target.value)}></input>
                    <input placeholder='Город' value={city} onChange={ event => setSity(event.target.value)}></input>
                    <div className={styles.Buttons}>
                        <button className={styles.ButtonLink} onClick={ () => {
                            try{
                                
                                if (prevData.length == 0){ navigate(links.Reg1)}
                                const user = {
                                    "first_name": first_name,
                                    "middle_name": middle_name,
                                    "last_name": last_name,
                                    "phone": phone,
                                    "email": prevData[0],
                                    "password": prevData[1],
                                    "city": city
                                };

                                const url = 'https://transfer.kemsu.ru/api/v1/sign_up/student/';
                                const options = {
                                    method: 'POST',
                                    mode: "cors",
                                    headers: {
                                        "accept": "application/json",
                                        'content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(user)
                                };

                                const response = fetch(url, options)
                                            .then((response) => {
                                                setCode(response.status);
                                            })
                    
                                console.log(response)
                                console.log(code)
                                if(code == 200){
                                    dispatch({type:"LOG_IN"})
                                    dispatch({type:"SET_MAIL", mail: prevData[0]})
                                    navigate(links.StudentProfile)
                                } else if(code == 500) {
                                    alert("Выполните, пожалуйста, вход")
                                    navigate(links.Auth)
                                } else {
                                    alert("Повторите попытку")
                                }
                            } catch (err){
                                console.log(err.message)
                                navigate(links.Auth)
                            }

                        }}>Регистрация</button>

                        <button className={styles.GrayButtonLink}>Ввести позже</button>
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