import React from 'react'
import StaffMenu from './StaffMenu'
import styles from './StaffProfileMain.module.css'

const StaffProfileMain = () => {
  return (
    <div className={styles.All}>
      <div className={styles.Stat}>
        <StatBlock clas={styles.One} text="Хотят перевестись" value={15} />
        <StatBlock clas={styles.Two} text="Бюджетные места" value={15} />
        <StatBlock clas={styles.Three} text="Потенциальные места" value={15} />
      </div>
    </div>
  )
}

const StatBlock = ({text, value, clas}) => {
  return (
    <div className={clas}>
      <p>{text}</p>
      <div>
        <p>{value}</p>
      </div>
    </div>
  )
}

export default StaffProfileMain

