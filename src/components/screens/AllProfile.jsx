import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import StaffProfile from './StaffProfile';
import StudentProfile from './StudentProfile';

const AllProfile = () => {

    const type = useSelector(state => state.type)
    const result = type === "student" ? <StudentProfile /> : <StaffProfile />

  return ( <>{result}</>)
}

export default AllProfile