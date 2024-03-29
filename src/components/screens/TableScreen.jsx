import React from 'react'
import Footer from '../elements/Footer/Footer'
import Header from '../elements/Header/Header'
import Table from '../elements/PlacesBlocks/Table'
import TableHeader from '../elements/PlacesBlocks/TableBlocks/TableHeader'
import UpHeader from '../elements/PlacesBlocks/UpHeaderBlocks/UpHeader'
import styles from './TableScreen.module.css'

const TableScreen = () => {
  return (
    <div>
        <Header />
        <Table/>
        <div className={styles.Footer}><Footer  /></div>
    </div>
  )
}

export default TableScreen