import React from 'react'
import Header from '../elements/Header/Header'
import Footer from '../elements/Footer/Footer'
import EmailBlock from '../elements/StudentProfile/EmailBlock'
import StudentButtons from '../elements/StudentProfile/StudentButtons'
import styles from "./StudentSettings.module.css"
import SettingBlock from '../elements/StudentSettings/SettingBlock'

const StudentSettings = () => {
  return (
    <div>
        <Header />
        <div className={styles.ProfileBlocks}>
            <EmailBlock />
            <StudentButtons selectedButton={"Settings"}/>
            <SettingBlock />
        </div>
        <Footer />


    </div>
  )
}

export default StudentSettings