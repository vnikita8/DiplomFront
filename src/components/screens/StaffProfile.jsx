import React from 'react'
import Footer from '../elements/Footer/Footer'
import Header from '../elements/Header/Header'
import StaffMenu from '../elements/StaffProfile/StaffMenu'
import StaffProfileMain from '../elements/StaffProfile/StaffProfileMain'
import styles from './StaffProfile.module.css'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";


const StaffProfile = () => {

  const isAuth = useSelector(state => state.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {navigate(links.NotFound)}
  }, []);

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