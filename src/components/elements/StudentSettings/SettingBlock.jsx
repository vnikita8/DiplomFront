import React, { useEffect, useState } from 'react'
import styles from "./SettingBlock.module.css"
import {useDispatch, useSelector} from "react-redux";

const SettingBlock = () => {


    const [data, setdata] = useState([]);
    const [first_name, setFirstName] = useState("");
    const [middle_name, setMiddleName] = useState("");
    const [last_name, setLastName] = useState("");
    const [city, setSity] = useState("");
    const [phone, setPhone] = useState("");


    const email = useSelector(state => state.mail);

    const fetchData = async () => {
        try{
            const url = "https://transfer.kemsu.ru/api/v1/student/?email=" + email;
            const options = {
                method: "GET",
                mode: "cors",
                headers: {
                    "accept": "application/json"
            }} 

            const response = await fetch(url, options);
            const json_data = await response.json();
            
            setdata(json_data);
            if(response.status == 200){
                setFirstName(json_data.first_name);
                setMiddleName(json_data.middle_name);
                setLastName(json_data.last_name);
                setSity(json_data.city);
                setPhone(json_data.phone);
            }
            
        } catch(err) {
            console.log("Error:", err.message);
        }
        
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
      <div className={styles.AllBlock}>
        {/* Основная информация */}
        <div className={styles.RowBlock}>
            <h3>Основная информация</h3>
            <div className={styles.Inputs}>
                <div className={styles.Input}>
                    <p>Фамилия</p> <input id={"FirstName"} type="text" value={first_name}  onChange={ event => setFirstName(event.target.value)} />
                </div>
                <div className={styles.Input}>
                    <p>Имя</p> <input id={"LastName"} type="text" value={last_name}  onChange={ event => setLastName(event.target.value)} />
                </div>
                <div className={styles.Input}>
                    <p>Отчество</p> <input id={"MiddleName"} type="text" value={middle_name}  onChange={ event => setMiddleName(event.target.value)} />
                </div>
            </div>
        </div>

        {/* Образование */}
        <div className={styles.RowBlock}>
            <h3>Образование</h3>
            <div className={styles.Inputs}>
                <div className={styles.Input}>
                    <p>Учебное заведение</p> <input id={"Vuz"}  value={"КемГУ"} disabled></input>
                </div>
                <div className={styles.Input}>
                    <p>Город</p> <input id={"City"} type="text" value={city}  onChange={ event => setSity(event.target.value)} />
                </div>
            </div>
        </div>

        {/* Безопасность и оповещения */}
        <div className={styles.RowBlock}>
            <h3>Основная информация</h3>
            <div className={styles.Inputs}>
                <div className={styles.Input}>
                    <p>Электронная почта</p> <input id={"Email"}  value={email} readOnly/>
                </div>
                <div className={styles.Input}>
                    <p>Мобильный телефон</p> <input id={"Phone"} type="text" value={phone}  onChange={ event => setLogin(event.target.value)} />
                </div>
                <div className={styles.Input}>
                    <p>Telegram</p> <input id={"Telega"} value={"Не подключен"} readOnly></input>
                </div>
            </div>
        </div>
          
          <div className={styles.ButtonFrame}>
            <button className={styles.SaveButton} onClick={ async () => {
                const user = {
                    "first_name": first_name,
                    "middle_name": middle_name,
                    "last_name": last_name,
                    "phone": phone,
                    "email": email,
                    "city": city
                };

                const url = 'https://transfer.kemsu.ru/api/v1/student/path/';
                const options = {
                    method: 'PATCH',
                    mode: "cors",
                    headers: {
                        "accept": "application/json",
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                };

                const response = await fetch(url, options)


            }}>Сохранить</button>
          </div>
      </div>
    )
}

export default SettingBlock