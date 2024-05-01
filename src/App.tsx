import React, { Suspense, useContext, useState } from 'react';
import "./styles/index.scss"
import { Routes, Route, Link } from 'react-router-dom';
import { AboutPageAsync } from './Pages/AboutPage/AboutPage.async';
import { HomePageAsync } from './Pages/HomePage/HomePage.async';
import { useTheme } from './theme/UseTheme';
import { classNames } from './helpers/classNames';


const App = () => {
    const {theme, toggleTheme} = useTheme()
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}></Route>
                    <Route path={'/'} element={<HomePageAsync/>}></Route>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
