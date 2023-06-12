import React from 'react'
import Header from '../elements/Header/Header'
import Footer from '../elements/Footer/Footer'
import EmailBlock from '../elements/StudentProfile/EmailBlock'
import InformationBlock from '../elements/StudentProfile/InformationBlock'
import StudentButtons from '../elements/StudentProfile/StudentButtons'
import styles from "./StudentProfile.module.css"
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom'
import links from '../../services/links'
import { useEffect } from 'react'

const StudentProfile = () => {

  const isAuth = useSelector(state => state.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {navigate(links.NotFound)}
  }, []);
  

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