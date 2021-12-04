import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
const nav ={
    hidden: {opacity: 0},
    open: {
        opacity: 1,
        transition: {
            ease: [.14,.8,.4,1],
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: [.14,.8,.4,1],
            duration: 0.5
        }
    
    }

}
const navOverlay = {
    hidden: {scale: 0, borderRadius: "100%"},
    open: {
        scale: 8, borderRadius: "100%",
        transition: {
            ease: [.14,.8,.4,1],
            duration: 1
        }
    },
    exit: {
        scale: 0, borderRadius: "100%",
        transition: {
            ease: [.14,.8,.4,1],
            duration: 0.5
        }
    
    }
}
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
        <header>
            <div className="header-cont">
                <div className="row space-between">
                    <div className="col">
                        <div className="yeahmap-logo" ><NavLink to="/"><img src="rise.png" alt="Home"/></NavLink></div>
                    </div>
                    <div className="col">
                        <div className="hamburger-menu desktop-hide" onClick={e => setIsOpen(!isOpen)}>
                            <div className={ isOpen ? "menu-toggle-icon menu-toggle-open" : "menu-toggle-icon menu-toggle-closed"}>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
          <AnimatePresence exitBeforeEnter>
          {isOpen && (
            <>
            <div style={{height: "100vh", width: "100vw", display: "flex", justifyContent: 'center', alignItems: 'center', position: 'absolute'}}>
                <motion.div className="menu-overlay" variants = {navOverlay} initial="hidden" animate = "open" exit="exit"/>
            </div>            
            <motion.div className="menu-overlay-container" variants = {nav} initial="hidden" animate = "open" exit="exit">
                <ul className="menu"  onClick={e => setIsOpen(!isOpen)} style={{flexDirection: 'column', alignItems: 'center', gap: "2rem"}}>
                    <li><NavLink to="/roster" className={({ isActive }) => isActive ? "current-page-item": ''}>ROSTER</NavLink></li>
                    <li><NavLink to="/phantoms" className={({ isActive }) => isActive ? "current-page-item": ''}>PHANTOMS</NavLink></li>
                </ul>
            </motion.div>
            </>
          )}
          </AnimatePresence>
          </>
    )
}

export default Header