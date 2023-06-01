import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthScreen from '../components/screens/AuthScreen';
import Home from '../components/screens/Home';
import RegisterScreen from '../components/screens/RegisterScreen';
import RegisterScreenNext from '../components/screens/RegisterScreenNext';
import TableScreen from '../components/screens/TableScreen';
import Test from '../components/screens/Test';
import NotFoundScreen from '../components/screens/NotFoundScreen';

export const UserContext = React.createContext();

const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={
                  <UserContext.Provider value="1">
                    <Home />
                  </UserContext.Provider> } path='/' />
                <Route element={
                  <UserContext.Provider value="1">
                    <AuthScreen />
                  </UserContext.Provider>  } path='/Auth' />
                <Route element={
                  <UserContext.Provider value="1">
                    <RegisterScreen />
                  </UserContext.Provider>} path='/Reg/1' />
                <Route element={
                  <UserContext.Provider value="1">
                    <RegisterScreenNext />
                  </UserContext.Provider>} path='/Reg/2' />
                <Route element={
                  <UserContext.Provider value="1">
                    <TableScreen />
                  </UserContext.Provider>} path='/Places' />
                <Route element={
                  <UserContext.Provider value="1">
                    <NotFoundScreen />
                  </UserContext.Provider>} path='*' />
            </Routes>
        </BrowserRouter>
    </>
  )}

export default Router