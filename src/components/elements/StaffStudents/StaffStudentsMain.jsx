import React from 'react'
import {useDispatch, useSelector} from "react-redux";


const StaffStudentsMain = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.isAuth)
  console.log(isAuth)


  return (
    <div>
      <button>Войти</button>
      <button>Выйти</button>
    </div>
  )
}

export default StaffStudentsMain