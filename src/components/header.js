import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {

const navOverlay = {
    hidden: {scale: 0, borderRadius: "500rem"},
    open: {
        scale: 1, borderRadius: "0rem",
        transition: {
            ease: [.14,.8,.4,1],
            duration: 0.5
        }
    },
    exit: {
        scale: 0, borderRadius: "500rem",
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
                        <div className="yeahmap-logo" ><NavLink to="/"><img src="yeahmap.png" alt="Home"/></NavLink></div>
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
            <motion.div className="menu-overlay" variants = {navOverlay} initial="hidden" animate = "open" exit="exit">
                <div className="menu-overlay-container">
                </div>
            </motion.div>
          )}
          </AnimatePresence>
          </>
    )
}

export default Header