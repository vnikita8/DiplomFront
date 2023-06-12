import React from 'react'
import Footer from '../elements/Footer/Footer'
import Header from '../elements/Header/Header'
import RegMain from '../elements/RegisterBlocks/RegMain'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector} from "react-redux";
import links from '../../services/links'


const RegisterScreen = () => {

  const isAuth = useSelector(state => state.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {navigate(links.NotFound)}
  }, []);


  return (
    <div>
        <RegMain />
    </div>
  )
}

export default RegisterScreen