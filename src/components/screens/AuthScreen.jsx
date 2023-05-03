import React from 'react'
import { Link } from 'react-router-dom'
import AuthMain from '../elements/AuthBlocks/AuthMain'
import Footer from '../elements/Footer/Footer'
import Header from '../elements/Header/Header'
import HeaderAuth from '../elements/Header/HeaderAuth'

const AuthScreen = () => {
  return (
    <div>
        <HeaderAuth />
        <AuthMain />
        <Footer />
    </div>
  )
}

export default AuthScreen