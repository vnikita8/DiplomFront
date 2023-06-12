import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthScreen from '../components/screens/AuthScreen';
import Home from '../components/screens/Home';
import RegisterScreen from '../components/screens/RegisterScreen';
import RegisterScreenNext from '../components/screens/RegisterScreenNext';
import TableScreen from '../components/screens/TableScreen';
import Test from '../components/screens/Test';
import NotFoundScreen from '../components/screens/NotFoundScreen';
import links from '../services/links';
import StudentProfile from '../components/screens/StudentProfile';
import StudentFavorite from '../components/screens/StudentFavorite';
import StudentSettings from '../components/screens/StudentSettings';
import StaffProfile from '../components/screens/StaffProfile';
import StaffStudents from '../components/screens/StaffStudents';
// import store from '../components/redux/store';
import { Provider } from 'react-redux'
import {createStore} from "redux";
import AllProfile from '../components/screens/AllProfile';

const defaulthState = {
  isAuth: false,
  type: "student",
  mail: "",
  sign_up: []
}

const reducer = (state = defaulthState, action) => {
  switch (action.type){
      case "LOG_IN":
          return {...state, isAuth: true}
      case "LOG_OUT":
          return {...state, isAuth: false, mail: ""}
      case "SET_MAIL":
          return{...state, mail: action.mail}
      case "CLEAR_MAIL":
          return{...state, mail: ""}
      case "SIGN_UP_ONE":
          return{...state, sign_up: action.sign_up}
      default:
          return state
  }
}


const store = createStore(reducer)



const Router = () => {
  return (
    <>
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path={links.Home} />
                <Route element={<AuthScreen />} path={links.Auth} />
                <Route element={<RegisterScreen />} path={links.Reg1} />
                <Route element={<RegisterScreenNext />} path={links.Reg2} />
                <Route element={<TableScreen />} path={links.Places} />
                <Route element={<NotFoundScreen />} path='*' />
                <Route element={<AllProfile />} path={links.StudentProfile} />
                <Route element={<StudentFavorite />} path={links.StudentFavorites} />
                <Route element={<StudentSettings />} path={links.StudentSettings} />
                <Route element={<StaffStudents />} path={links.StaffStudents} />
            </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )}
export default Router