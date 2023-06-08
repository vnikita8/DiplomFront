import React from 'react'
import styles from './EmailBlock.module.css'


const EmailBlock = () => {
    let email = "vnikita@kemsu.ru";
  return (
    <div className={styles.EmailText}>{email}</div>
  )
}

export default EmailBlock