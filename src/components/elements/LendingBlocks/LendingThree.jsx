import React from 'react'
import { Link } from 'react-router-dom'
import links from '../../../services/links'
import styles from './LendingThree.module.css'

const LendingThree = () => {
  return (
    <div className={styles.Upper}>
        <Statistics />
        <Steps />
    </div>
  )
}


//Тут регион с блоком "Статистика"
const stats = [ {value: 85, text:"Хотят перевестись на бюджет"},
                {value: 43, text:"Не знают о процессе перевода"},
                {value: 9, text:"Самостоятельно перевелись"},
                {value: 51, text:"В приоритете направление"},
                {value: 4, text:"В приоритете университет"} 
]

const Statistics = () => {
    return(
        <div className={styles.Statistics}>
            <div className={styles.StatTitleBlock}>
                <h1>Статистика</h1>
                <p>До запуска системы</p>
            </div>
            <div className={styles.StatBlocks}> {stats.map(stat => <StatBlock key={stat.value} percent={stat.value} text={stat.text} />)} </div>
        </div>
    )
}

const StatBlock = ({percent, text}) => {
    return(
        <div className={styles.StatBlock}>
            <div className={styles.Percent}>{percent}%</div>
            <p>{text}</p>
        </div>
    )
}


// Регион с блкоом "4 шага к бюджету"
const steps = [{value: 1, text:"Перейти во вкладку \"Вакантные места\""},
{value: 2, text:"Выбрать интересующее направление"},
{value: 3, text:"Добавить в избранное"},
{value: 4, text:"Подготовить необходимые документы"}
]

const Steps = () => {
    return(
        <div className={styles.StepBlock}>
            <h1><span>4 шага</span> к бюджету</h1>
            <div className={styles.Steps}> 
            {steps.map(step=> <Step key={step.value} number={step.value} text={step.text} />)} 
            
            </div>
            <Link to={links.Places}>Вакантные места</Link>
        </div>
    )
}

const Step = ({number, text}) => {
    return(
        <div className={styles.Step}>
            <div>{number}</div>
            <p>{text}</p>
        </div>

    )
}


export default LendingThree