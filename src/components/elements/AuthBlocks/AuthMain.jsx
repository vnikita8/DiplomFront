import React from 'react'
import styles from './AuthMain.module.css'
import {Link} from 'react-router-dom';
import links from '../../../services/links';

const AuthMain = () => {
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
                <input placeholder='Почта'></input>
                <input placeholder='Пароль'></input>
                <p>Забыли пароль?</p>
            </form>
            <Link onClick={getData}>Войти</Link>
        </div>
        </div>


    </div>
  )
}

async function getData2(){

    const url = 'https://transfer.kemsu.ru/api/v1/sign_up/student/';

    const user = {
        "first_name": "Default",
        "middle_name": "Default",
        "last_name": "Default",
        "phone": "8-150-555-35-35",
        "email": "qqqqqqdefault@mail.com",
        "password": "qqqqqq123456"
    };

    const options = {
        method: 'POST',
        mode: "cors",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    };

    let answer = new CustomResp();
    
    const response = fetch(url, options)
                    .then((response) => {
                        answer.setCode(response.status);
                        return response.json()
                    })
                    .then((data) => { 
                        answer.setData(data);
                    })

                    .catch();

    console.log(answer)

}

async function getData(){

    const url = 'https://transfer.kemsu.ru/api/v1/sign_up/student/';

    const user = {
        "first_name": "Default",
        "middle_name": "Default",
        "last_name": "Default",
        "phone": "8-150-555-35-35",
        "email": "qqqqqqdefault@mail.com",
        "password": "qqqqqq123456"
    };

    const options = {
        method: 'POST',
        mode: "cors",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    };

    let answer = new CustomResp();
    
    const response = fetch(url, options)
                    .then((response) => {
                        answer.setCode(response.status);
                        return response.json()
                    })
                    .then((data) => { 
                        answer.setData(data);
                    })

                    .catch();

    console.log(answer)

}

class CustomResp{
    constructor(inData, inCode){
        this.Data = inData;
        this.Code = inCode;
    }

    setCode(inCode) {
        this.Code = inCode;
    }

    setData(inData) {
        if(typeof inData == "boolean"){
            this.Data = "Пользователь успешно добавлен";
            this.isBool = inData;
        }
        else {
            this.Data = inData;
            this.isBool = false;
        }
            
    }
}


export default AuthMain