import React from 'react'
import { Link } from 'react-router-dom';
import styles from './LendingTwo.module.css'

class Item {
  label;
  value;
}



const LendingTwo = () => {
  return (
    <div className={styles.Upper}>
        <div className={styles.Titles}>
          <h1 className={styles.Title}>Уже определились с выбором?</h1>
          <p>Просто выбери нужные параметры - остальное мы возьмём на себя.</p>
        </div>
        <div className={styles.FiltersAndButton}>
          <div className={styles.Filters}>
              <div className={styles.FilterRow}>
                  <DropDown title="Код направления" items={[]} />
                  <p>или</p>
                  <DropDown title="Направление" items={[]} />
              </div>
              <div className={styles.FilterRow}>
                <DropDown title="Курс" items={[]} />
                <DropDown title="Образование" items={[]} />
                <DropDown title="Форма обучения" items={[]} />
              </div>
          </div>
          <Link to="/">Найти место</Link>
        </div>
    </div>
  )
}

const DropDown = ({items, title}) =>{
  return (
    <div className={styles.DropDown}>
      <p>{title}</p>
      <ul placeholder='Выберите..'>
        {items.map( item => <li>{item.label}</li>)}
      </ul>
    </div>
  )
}



export default LendingTwo