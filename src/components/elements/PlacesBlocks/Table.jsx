import React from 'react'
import styles from './Table.module.css'
import Paginator from './TableBlocks/Paginator'
import TableHeader from './TableBlocks/TableHeader'
import UpHeader from './UpHeaderBlocks/UpHeader'

const Table = () => {
  return (
    <div className={styles.Upper}>
      <UpHeader />
      <div className={styles.Table}>
        <TableHeader />
        <Paginator />
      </div>
      
    </div>
  )
}

export default Table