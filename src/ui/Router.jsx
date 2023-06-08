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

export const UserContext = React.createContext();

const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={
                  <UserContext.Provider value="1">
                    <Home />
                  </UserContext.Provider> } path={links.Home} />
                <Route element={
                  <UserContext.Provider value="1">
                    <AuthScreen />
                  </UserContext.Provider>  } path={links.Auth} />
                <Route element={
                  <UserContext.Provider value="1">
                    <RegisterScreen />
                  </UserContext.Provider>} path={links.Reg1} />
                <Route element={
                  <UserContext.Provider value="1">
                    <RegisterScreenNext />
                  </UserContext.Provider>} path={links.Reg2} />
                <Route element={
                  <UserContext.Provider value="1">
                    <TableScreen />
                  </UserContext.Provider>} path={links.Places} />
                <Route element={
                  <UserContext.Provider value="1">
                    <NotFoundScreen />
                  </UserContext.Provider>} path='*' />
                <Route element={
                  <UserContext.Provider value="1">
                    <StaffProfile />
                  </UserContext.Provider>} path={links.StudentProfile} />
                <Route element={
                  <UserContext.Provider value="1">
                    <StudentFavorite />
                  </UserContext.Provider>} path={links.StudentFavorites} />
                <Route element={
                  <UserContext.Provider value="1">
                    <StudentSettings />
                  </UserContext.Provider>} path={links.StudentSettings} />

                <Route element={
                  <UserContext.Provider value="1">
                    <StaffStudents />
                  </UserContext.Provider>} path={links.StaffStudents} />
            </Routes>
        </BrowserRouter>
    </>
  )}
export default Router