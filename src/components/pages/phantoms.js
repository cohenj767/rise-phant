import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../App';

const Phantoms = () => {
    return(
        <motion.main className="content" initial="initial" animate="in" exit="out" variants={pageVariants}>
            <div>Phantoms</div>
        </motion.main>
    )
}

export default Phantoms