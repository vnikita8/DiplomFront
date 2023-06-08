import React from 'react'
import Footer from '../elements/Footer/Footer'
import Header from '../elements/Header/Header'
import StaffMenu from '../elements/StaffProfile/StaffMenu'
import StaffStudentsMain from '../elements/StaffStudents/StaffStudentsMain'
import styles from './StaffStudents.module.css'

const StaffStudents = () => {
  return (
    <div>
        <Header />
        <div className={styles.ProfileBlocks}>
            <StaffMenu selectedButton={"Students"} name={"Институт цифры"}/>
            <StaffStudentsMain />
        </div>
        <Footer />
    </div>
  )
}

export default StaffStudents