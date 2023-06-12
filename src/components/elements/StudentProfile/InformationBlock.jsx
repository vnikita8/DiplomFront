import React, { useEffect, useState } from 'react'
import links from '../../../services/links'
import styles from "./InformationBlock.module.css"
import {useDispatch, useSelector} from "react-redux";



const InformationBlock = () => {
    
    const email = useSelector(state => state.mail);

    const [data, setdata] = useState([]);

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
            
        } catch(err) {
            console.log("Error:", err.message);
        }
        
    };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className={styles.AllBlock}>
        <div className={styles.Row}>
            <p className={styles.RowHeader}>Электронная почта:</p> <p className={styles.RowValue}>{data.email}</p>
        </div>
        <div className={styles.Row}>
            <p className={styles.RowHeader}>Фамилия:</p> <p className={styles.RowValue}>{data.first_name}</p>
        </div>
        <div className={styles.Row}>
            <p className={styles.RowHeader}>Имя:</p> <p className={styles.RowValue}>{data.last_name}</p>
        </div>
        <div className={styles.Row}>
            <p className={styles.RowHeader}>Отчество:</p> <p className={styles.RowValue}>{data.middle_name}</p>
        </div>
        <div className={styles.Row}>
            <p className={styles.RowHeader}>Город:</p> <p className={styles.RowValue}>{data.city}</p>
        </div>
        <div className={styles.Row}>
            <p className={styles.RowHeader}>Мобильный телефон:</p> <p className={styles.RowValue}>{data.phone}</p>
        </div>
        
    </div>
  )
}

export default InformationBlock