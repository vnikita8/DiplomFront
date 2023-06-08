import React from 'react'
import {Link} from 'react-router-dom';
import links from '../../../services/links';
import styles from "./StudentButtons.module.css";

const StudentButtons = ({selectedButton}) => {
  return (
    <div className={styles.ButtonGroup}>
        <Link className={selectedButton == "Profile"? styles.ButtonSelected:styles.Button } to={links.StudentProfile}>Личный кабинет</Link>
        <Link className={selectedButton == "Favorite"? styles.ButtonSelected:styles.Button } to={links.StudentFavorites}>Список избранного</Link>
        <Link className={selectedButton == "Settings"? styles.ButtonSelected:styles.Button } to={links.StudentSettings}>Настройки</Link>
    </div>
  )
}

export default StudentButtons