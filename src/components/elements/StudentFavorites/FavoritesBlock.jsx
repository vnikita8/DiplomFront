import React from 'react'
import styles from "./FavoritesBlock.module.css"

const FavoritesBlock = () => {
  return (
    <div className={styles.AllBlock}>
        <OneBlock />
    </div>
  )
}

const OneBlock = () => {
    let data = mokData();
   
    return (
        <>
        {data.map(item => (
            <div className={styles.Block}>
                <p className={styles.BLockHeader}>{item.Header}</p>
                <div className={styles.Table}>
                    <div className={styles.TableHeader}>
                        <p className={styles.First}>Профиль</p>
                        <p className={styles.Twice}>Группа</p>
                        <p className={styles.Third}>Курс</p>
                        <p className={styles.Four}>Свободных</p>
                        <p className={styles.Five}>Потенциальных</p>
                        <img className={styles.Star}></img>
                    </div>
                    <div className={styles.Rows}>
                        {item.Body.map(bodyElement => (
                            <div className={styles.TableRow}>
                                <p className={styles.First}>{bodyElement.ProfileName}</p>
                                <p className={styles.Twice}>{bodyElement.Group}</p>
                                <p className={styles.Third}>{bodyElement.Course}</p>
                                <p className={styles.Four}>{bodyElement.Available}</p>
                                <p className={styles.Five}>{bodyElement.Potentional}</p>
                                <img src={"/public/star_filled.svg"}></img>
                            </div>
                        ))}
                    </div>
                    
                    

            </div>
        </div>

        ))}
        
        </>
        
    )
}

function mokData(){
    let mok = [
        {Header: "Прикладная информатика",
         Body: [{ 
            ProfileName: "Прикладная информатика в экономике",
            Group: "Пи-192",
            Course: "4",
            Available: "5",
            Potentional: "6"
            },
            { 
                ProfileName: "Прикладная информатика в биологии",
                Group: "Пб-192",
                Course: "2",
                Available: "3",
                Potentional: "1"
            }]  
        },
        {Header: "Прикладной бизнес",
        Body: [{ 
           ProfileName: "Свободная касса на рынке труда",
           Group: "Рт-212",
           Course: "2",
           Available: "1",
           Potentional: "1"
           }]    
       }
        ]
    return mok;
}

export default FavoritesBlock