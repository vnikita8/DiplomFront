import React from 'react'
import styles from './Table.module.css'
import Paginator from './TableBlocks/Paginator'
import TableHeader from './TableBlocks/TableHeader'
import UpHeader from './UpHeaderBlocks/UpHeader'

const Table = () => {
  return (
    <div className={styles.Upper}>
      <UpHeader />
      <TableHeader />
      <Paginator />
    </div>
  )
}

export default Table