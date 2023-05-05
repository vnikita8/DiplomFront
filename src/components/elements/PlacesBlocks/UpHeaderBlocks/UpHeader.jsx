import React from 'react'
import styles from './UpHeader.module.css'

const UpHeader = () => {
  return (
    <div className={styles.Upper}>
        <div className={styles.Left}>
            <Search />
        </div>
        <div className={styles.Right}>
            <FilterAndSort />
        </div>
    </div>
  )
}

const Search = () => {
    return (
        <input className={styles.Search} placeholder='Поиск'>
        </input>
    )
}

const FilterAndSort = () => {
    return(
        <div className={styles.FilterGroup}>
            <button>Сортировка <img src='/Sort.svg' /></button> 
            <button>Фильтры <img src='/Filters.svg' /></button> 
        </div>

    )
}

export default UpHeader