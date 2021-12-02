import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../App';
import { picks } from "./../picks";
import phantImg from "../../media/netherrite_pick.png";

const phantList = {
    hidden: {},
    visible: { 
        transition: {
            staggerChildren: .08,
            ease: [.14,.8,.4,1]
      }
    }
};

const phantCard = {
    hidden: { y: 50, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [.14,.8,.4,1]
        },
    },

};

function Phantom({id, owner, upgradeLvl, isSharing, firstPrio, secondPrio, location}) {
    return(
        <motion.li className="phantCard" variants={phantCard}>
            {id} <img src={phantImg} alt="pick"/>
        </motion.li>
    )
}


const Phantoms = () => {
    return(
        <motion.main className="content" initial="initial" animate="in" exit="out" variants={pageVariants}>
            <motion.div variants={phantList} initial="hidden" animate="visible">
                <motion.ul className="phantList">
                    {picks.map(pick => (
                    <Phantom key={pick.id} {...pick}/>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.main>
    )
}

export default Phantoms