import React from 'react'
import Footer from '../elements/Footer/Footer'
import Header from '../elements/Header/Header'
import LendingFour from '../elements/LendingBlocks/LendingFour'
import LendingOne from '../elements/LendingBlocks/LendingOne'
import LendingThree from '../elements/LendingBlocks/LendingThree'
import LendingTwo from '../elements/LendingBlocks/LendingTwo'
import styles from './Home.module.css'

const Home = () => {
    return (

    <div>
        <Header />
        <LendingOne />
        <LendingTwo />
        <LendingThree />
        <LendingFour />
        <Footer />
    </div>
    
    )
}

export default Home