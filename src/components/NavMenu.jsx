import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { AboutUs, Home, NoPageFound, Skills } from './NavigationMenu/index';

const NavMenu = () => {

    return (<>
        {/* Using 'react-router-dom' v6, Routes starts with <BrowserRouter> (in index.js) & then to maintain multiple routes we have <Routes> component which keeps all the routes with <Route> component */}
        {/* Here we have 'exact' prop so that the route would be a exact match */}
        {/* Use path="/*" for Wild card route/ 404 page  */}
        <Routes>
            <Route exact path='/' element={<Home name="Rajat Sharma" />}></Route>
            <Route exact path='/about-us' element={<AboutUs name="Rajat Sharma" qual="MCA" />}></Route>
            {/* Using useParams() hook that gives route params data in the component */}
            <Route exact path='/skills/:primary/:secondary' element={<Skills name="Rajat" />}>
            </Route>
            {/* It will take yo to a specific 404 component */}
            <Route path="/*" element={<NoPageFound />}></Route>

            {/* It will navigate you to home page, when unwanted route visits */}
            <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Routes>

        {/* Instead of using <a> tag(it reloads the page) to navigate, we use <Link> or <NavLink> 
        (specially for Navbar Menu) to make it Single Page Application */}
        {/* prop 'classname' is used to highlight the clicked/current route among all the NavMenu */}
        <p><NavLink to="/"
            className={(navData) => (navData.isActive ? "active-style" : 'none')} >Home</NavLink>
        </p>
        <p><NavLink to="/about-us"
            className={(navData) => (navData.isActive ? "active-style" : 'none')}>About Us</NavLink></p>
        <p><NavLink to="/skills/Angular/React"
            className={(navData) => (navData.isActive ? "active-style" : 'none')}>Skills</NavLink></p>
        <p><NavLink to="/unknown"
            className={(navData) => (navData.isActive ? "active-style" : 'none')}>404</NavLink></p>
    </>);
}

export default NavMenu;