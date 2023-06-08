import React from 'react'
import styles from "./SettingBlock.module.css"

const SettingBlock = () => {
    let email = "vnikita@kemsu.ru"
    return (
      <div className={styles.AllBlock}>
        {/* Основная информация */}
        <div className={styles.RowBlock}>
            <h3>Основная информация</h3>
            <div className={styles.Inputs}>
                <div className={styles.Input}>
                    <p>Фамилия</p> <input id={"SecondName"}></input>
                </div>
                <div className={styles.Input}>
                    <p>Имя</p> <input id={"FirstName"}></input>
                </div>
                <div className={styles.Input}>
                    <p>Отчество</p> <input id={"ThirdName"}></input>
                </div>
            </div>
        </div>

        {/* Образование */}
        <div className={styles.RowBlock}>
            <h3>Образование</h3>
            <div className={styles.Inputs}>
                <div className={styles.Input}>
                    <p>Учебное заведение</p> <input id={"Vuz"}></input>
                </div>
                <div className={styles.Input}>
                    <p>Город</p> <input id={"City"}></input>
                </div>
            </div>
        </div>

        {/* Безопасность и оповещения */}
        <div className={styles.RowBlock}>
            <h3>Основная информация</h3>
            <div className={styles.Inputs}>
                <div className={styles.Input}>
                    <p>Электронная почта</p> <input id={"Email"}></input>
                </div>
                <div className={styles.Input}>
                    <p>Мобильный телефон</p> <input id={"Phone"}></input>
                </div>
                <div className={styles.Input}>
                    <p>Telegram</p> <input id={"Telega"}></input>
                </div>
            </div>
        </div>
          
          <div className={styles.ButtonFrame}>
            <button className={styles.SaveButton}>Сохранить</button>
          </div>
      </div>
    )
}

export default SettingBlock