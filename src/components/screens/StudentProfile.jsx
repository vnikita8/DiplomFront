import React from 'react'
import Header from '../elements/Header/Header'
import Footer from '../elements/Footer/Footer'
import EmailBlock from '../elements/StudentProfile/EmailBlock'
import InformationBlock from '../elements/StudentProfile/InformationBlock'
import StudentButtons from '../elements/StudentProfile/StudentButtons'
import styles from "./StudentProfile.module.css"

const StudentProfile = () => {
  return (
    <div>
        <Header />
        <div className={styles.ProfileBlocks}>
            <EmailBlock />
            <StudentButtons selectedButton={"Profile"}/>
            <InformationBlock />
        </div>
        <Footer />


    </div>
  )
}

export default StudentProfile