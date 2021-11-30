import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavMenu = {
    hidden: {y: -20, opacity: 0},
    open:{
        y: 0,
        opacity: 1,
        transition: {
            ease: [.14,.8,.4,1],
            duration: 0.8
        }
    }
}

const Navbar = () => {
    return(
        <motion.nav className="app-desktop-menu mobile-hide" variants = {NavMenu} initial="hidden" animate="open">
            <ul className="menu">
                <li><NavLink to="/roster" className={({ isActive }) => isActive ? "current-page-item": ''}>ROSTER</NavLink></li>
                <li><NavLink to="/phantoms" className={({ isActive }) => isActive ? "current-page-item": ''}>PHANTOMS</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "current-page-item": ''}>ABOUT</NavLink></li>
            </ul>
        </motion.nav>
    )
}

export default Navbar