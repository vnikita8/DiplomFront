import React from 'react'
import Footer from '../elements/Footer/Footer'
import Header from '../elements/Header/Header'
import StaffMenu from '../elements/StaffProfile/StaffMenu'
import StaffProfileMain from '../elements/StaffProfile/StaffProfileMain'
import styles from './StaffProfile.module.css'

const StaffProfile = () => {
  return (
    <div>
        <Header />
        <div className={styles.ProfileBlocks}>
            <StaffMenu selectedButton={"Profile"} name={"Институт цифры"}/>
            <StaffProfileMain />
        </div>
        <Footer />
    </div>
  )
}

export default StaffProfile