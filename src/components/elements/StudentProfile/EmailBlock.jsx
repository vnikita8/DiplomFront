import React from 'react'
import styles from './EmailBlock.module.css'
import {useDispatch, useSelector} from "react-redux";


const EmailBlock = () => {
  const email = useSelector(state => state.mail);
  return (
    <div className={styles.EmailText}>{email}</div>
  )
}

export default EmailBlock