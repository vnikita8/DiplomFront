import React from 'react'
import Header from '../elements/Header/Header'
import Footer from '../elements/Footer/Footer'
import styles from './NotFoundScreen.module.css'



const NotFoundScreen = () => {
  return (
    <div className={styles.Upper}>
        <Header />
        <h2>404 - Страница не найдена</h2>
        <Footer />
    </div>
  )
}

export default NotFoundScreen