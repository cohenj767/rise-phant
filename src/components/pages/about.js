import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../App';

const About = () => {
    return(
        <motion.main className="content" initial="initial" animate="in" exit="out" variants={pageVariants}>
            <div>About</div>
        </motion.main>
    )
}

export default About