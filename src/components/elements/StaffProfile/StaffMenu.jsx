import React from 'react'
import { Link } from 'react-router-dom'
import links from '../../../services/links';
import styles from "./StaffMenu.module.css";

const StaffMenu = ({selectedButton, name}) => {
  return (
    <div className={styles.All}>
        <p className={styles.EmailText}>{name}</p>
        <div className={styles.ButtonGroup}>
            <Link className={selectedButton == "Profile"? styles.ButtonSelected:styles.Button } to={links.StudentProfile}>Статистика</Link>
            <Link className={selectedButton == "Students"? styles.ButtonSelected:styles.Button } to={links.StaffStudents}>Студенты</Link>
            <Link className={selectedButton == "PlacesChange"? styles.ButtonSelected:styles.Button } to={links.StudentProfile}>Направления</Link>
        </div>
    </div>
  )
}

export default StaffMenu



const data = {
    Name: "Институт цифры",
    Want: "15",
    Available: "5",
    Potenrional: "10"
  }
