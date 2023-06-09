import React, { useEffect, useState } from 'react'
import CustomResp from '../../../../services/CustomResponse'
import styles from './TableHeader.module.css'
import apiLinks from '../../../../services/ApiLinks'

const TableHeader = () => {
    const [data, setdata] = useState([]);

    const fetchData = async () => {
        try{
            const url = "https://transfer.kemsu.ru/api/v1/groups/";
            const options = {
                method: "GET",
                mode: "cors",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
            }} 

            const response = await fetch(url, options);
            const json_data = await response.json();
            let resultRows = []


            for (let i = 0; i<json_data.length; i++){
                try{
                    resultRows.push(new RowValue(   id, 
                                                    item.name, 
                                                    item.shedule_plan.oop.code, 
                                                    item.shedule_plan.recruitment_year, 
                                                    item.shedule_plan.oop.education_level,
                                                    item.course,
                                                    item.shedule_plan.form,
                                                    item.available_places,
                                                    item.potential_places));
                } catch{
                    continue;
                }
            }
            setdata(resultRows);
            
        } catch(err) {
            console.log("Error:", err.message);
        }
        
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    
  return (

    <table className={styles.Upper}>
        <thead>
            <tr className={styles.Header}>
                {tableHeaders.map(item => <TableItem key={item.id} style={styles.HeaderItem} id={item.id} text={item.text} width={item.maxWidth} />)}
            </tr>
        </thead>
        <tbody>
           {console.log(data)}
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
            <TableItem text={text.name} width={tableWidth.first} style={style} />
            <TableItem text={text.speciality} width={tableWidth.second} style={style} />
            <TableItem text={text.startYear} width={tableWidth.third} style={style} />
            <TableItem text={text.eduLevel} width={tableWidth.four} style={style} />
            <TableItem text={text.course} width={tableWidth.five} style={style} />
            <TableItem text={text.form} width={tableWidth.six} style={style} />
            <TableItem text={text.available} width={tableWidth.seven} style={style} />
            <TableItem text={text.potentional} width={tableWidth.eight} style={style} />
        </tr>
    )
}

export default TableHeader

class RowValue{
    id; name; speciality; startYear; eduLevel; course; form; available; potentional;
    constructor(id, name, speciality, startYear, eduLevel, course, form, available, potentional){
        this.id = id; 
        this.name = name; 
        this.speciality = speciality; 
        this.startYear = startYear; 
        this.eduLevel = eduLevel; 
        this.course = course; 
        this.form = form; 
        this.available = available; 
        this.potentional = potentional;
    }
}

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


async function getGroups(){
    let json = [];
    try{
        const url = "https://transfer.kemsu.ru/api/v1/groups/";

        const options = {
            method: "GET",
            mode: "cors",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            }
        } 
            
    
        let response = await fetch(url, options);
        

        if (response.ok){
            json = await response.json();
        } else {
            console.log("Ошибка получения:", response.status);
        }
        // let result = json.map((element) => <TableRow text={element} style={styles.RowOne} />);

    } catch (err){
        console.log(err)
    }
    
    return  await json; 
}




