import React from 'react'
import AuthMain from '../elements/AuthBlocks/AuthMain'

import links from '../../services/links';
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector} from "react-redux";

const AuthScreen = () => {
  const isAuth = useSelector(state => state.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {navigate(links.NotFound)}
  }, []);

  return (
    <div>
        <AuthMain />
    </div>
  )
}

export default AuthScreen