import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../App';

const Home = () => {
    return(
        <motion.main className="content" initial="initial" animate="in" exit="out" variants={pageVariants}>
            <div>Home</div>
        </motion.main>
    )
}

export default Home