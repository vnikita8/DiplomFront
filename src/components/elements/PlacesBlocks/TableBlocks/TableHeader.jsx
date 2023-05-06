import React from 'react'
import styles from './TableHeader.module.css'



const TableHeader = () => {
  return (

    <table className={styles.Upper}>
        <thead>
            <tr className={styles.Header}>
                {tableHeaders.map(item => <TableItem key={item.id} style={styles.HeaderItem} id={item.id} text={item.text} width={item.maxWidth} />)}
            </tr>
        </thead>
        <tbody>
            {elementsMok.map( item => 
                <>
                    <TableRow className={styles.TableRow} key={item.id} id={item.id} text={item} style={item.id%2 == 0? styles.RowOne: styles.RowTwo} />
                    {/* <hr className={styles.Line}></hr> */}
                </>
                )}
            </tbody>
        
    </table>   
  )
}

const TableItem = ({text, width, style}) => {
    return(
        <td className={style} width={width}>
            <p >{text}</p>
        </td>
    )
}

const TableRow = ({text, style}) => {
    return(
        <tr>
            <TableItem text={text.napravl} width={tableWidth.first} style={style} />
            <TableItem text={text.special} width={tableWidth.second} style={style} />
            <TableItem text={text.year} width={tableWidth.third} style={style} />
            <TableItem text={text.level} width={tableWidth.four} style={style} />
            <TableItem text={text.course} width={tableWidth.five} style={style} />
            <TableItem text={text.form} width={tableWidth.six} style={style} />
            <TableItem text={text.free} width={tableWidth.seven} style={style} />
            <TableItem text={text.potencial} width={tableWidth.eight} style={style} />
        </tr>
    )
}

export default TableHeader


const tableWidth = {
    first: 200,
    second: 200,
    third: 164,
    four: 170,
    five: 80,
    six: 170,
    seven: 150,
    eight: 174
}

const tableHeaders = [
    {id: 0, text: "Направленность", maxWidth: tableWidth.first},
    {id: 1, text: "Специальность", maxWidth: tableWidth.second},
    {id: 2, text: "Год набора", maxWidth: tableWidth.third},
    {id: 3, text: "Уровень образования", maxWidth: tableWidth.four},
    {id: 4, text: "Курс", maxWidth: tableWidth.five},
    {id: 5, text: "Форма обучения", maxWidth: tableWidth.six},
    {id: 6, text: "Свободных мест", maxWidth: tableWidth.seven},
    {id: 7, text: "Потенциальных мест", maxWidth: tableWidth.eight},
]


const elementsMok = [
    {
        id:0, 
        napravl: "Прикладная информатика в экономике", 
        special:"Прикладная информатика", 
        year:"2021", 
        level:"Бакалавриат",
        course:"3",
        form:"Очная",
        free:"5",
        potencial:"8"
    },
    {id:1, napravl: "Прикладная информатика в экономике", special:"Прикладная информатика", year:"2021", level:"Бакалавриат",course:"3",form:"Очная",free:"5",potencial:"8"},
    {id:2, napravl: "Прикладная информатика в экономике", special:"Прикладная информатика", year:"2021", level:"Бакалавриат",course:"3",form:"Очная",free:"5",potencial:"8"},
    {id:3, napravl: "Прикладная информатика в экономике", special:"Прикладная информатика", year:"2021", level:"Бакалавриат",course:"3",form:"Очная",free:"5",potencial:"8"},
    {id:4, napravl: "Прикладная информатика в экономике", special:"Прикладная информатика", year:"2021", level:"Бакалавриат",course:"3",form:"Очная",free:"5",potencial:"8"},
    {id:5, napravl: "Прикладная информатика в экономике", special:"Прикладная информатика", year:"2021", level:"Бакалавриат",course:"3",form:"Очная",free:"5",potencial:"8"},
    {id:6, napravl: "Прикладная информатика в экономике", special:"Прикладная информатика", year:"2021", level:"Бакалавриат",course:"3",form:"Очная",free:"5",potencial:"8"},
    {id:7, napravl: "Прикладная информатика в экономике", special:"Прикладная информатика", year:"2021", level:"Бакалавриат",course:"3",form:"Очная",free:"5",potencial:"8"},
]