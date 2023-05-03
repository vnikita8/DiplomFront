import React from 'react'
import styles from './LendingFour.module.css'

const texts = [
    {title: "Кто мы", text: "Мы онлайн-ресурс для поиска свободных бюджетных мест в высших учебных заведениях.", id:0},
    {title: "Наша миссия", text: "Помочь студенту получить высшее образование за счёт бюджета!", id:1},
    {title: "Преимущества", text: "Вместо сложных таблиц статичных таблиц - поиск, фильтры и список избранного.", id:2}
]


const LendingFour = () => {
  return (
    <div className={styles.Upper}>
        {texts.map(i => <Block title={i.title} text={i.text} key={i.id}/>)}
    </div>
  )
}

const Block = ({title, text}) => {
    return (
        <div className={styles.Block}>
            <h1>{title}</h1>
            <hr />
            <p>{text}</p>
        </div>
    )
}

export default LendingFour