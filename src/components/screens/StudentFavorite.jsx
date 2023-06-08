import React from 'react'
import Header from '../elements/Header/Header'
import Footer from '../elements/Footer/Footer'
import EmailBlock from '../elements/StudentProfile/EmailBlock'
import StudentButtons from '../elements/StudentProfile/StudentButtons'
import styles from "./StudentFavorite.module.css"
import FavoritesBlock from '../elements/StudentFavorites/FavoritesBlock'

const StudentFavorite = () => {
  return (
    <div>
        <Header />
        <div className={styles.ProfileBlocks}>
            <EmailBlock />
            <StudentButtons selectedButton={"Favorite"}/>
            <FavoritesBlock className={styles.Block}/>
        </div>
        <Footer />

    </div>
  )
}

export default StudentFavorite