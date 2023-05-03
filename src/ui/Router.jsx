import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthScreen from '../components/screens/AuthScreen';
import Home from '../components/screens/Home';
import RegisterScreen from '../components/screens/RegisterScreen';
import Test from '../components/screens/Test';

const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<AuthScreen />} path='/Auth' />
                <Route element={<RegisterScreen />} path='/Regist' />
                <Route element={<div>404</div>} path='*' />
            </Routes>
        </BrowserRouter>
    </>
  )}

export default Router