import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../App';
import { members } from "./../members";

const membersGrid = {
    hidden: {},
    visible: { 
        transition: {
            delayChildren: 0.25,
            staggerChildren: .08,
            ease: [.14,.8,.4,1]
      }
    }
};

const cardContainer = {
    hidden: { y: 80, opacity: 0, rotateZ: 1},
    visible: {
        rotateZ: 0,
        y: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            duration: 0.8,
            ease: [.14,.8,.4,1]
        },
    },

};


function Card({name, role, hasPhantom}) {
    return(
        <motion.li className="cardContainer" variants={cardContainer} whileTap={{scale: 0.97}}>
            <span>{name}</span>
            <span>{role}</span>
        </motion.li>
    )
}



const Roster = () => {
    return(
        <motion.main className="content" initial="initial" animate="in" exit="out" variants={pageVariants}>
            <motion.ul className="membersGrid" variants={membersGrid} initial="hidden" animate="visible">
                {members.map(card => (
                    <Card key={card.id} {...card}/>
                    ))}
            </motion.ul>
        </motion.main>
    )
}

export default Roster