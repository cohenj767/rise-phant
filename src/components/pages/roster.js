import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../App';
import { members } from "./../members";
import { FaUser } from 'react-icons/fa';

const membersGrid = {
    hidden: {},
    visible: { 
        transition: {
            staggerChildren: .08,
            ease: [.14,.8,.4,1]
      }
    }
};

const cardContainer = {
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

const seperator = {
    hidden: {scaleX: 0},
    visible: {scaleX: 1,
    transition: {
        duration: 0.8,
        ease: [.14,.8,.4,1]
    }
    }
}


function Card({name, role, hasPhantom, background}) {
    var hasPhantomColor
    var hasPhantomColorText

    switch (hasPhantom) {
        case "true":
            hasPhantomColor = "#55FF55"
            hasPhantomColorText = "#071824"
            break;
        default:
            hasPhantomColor = "#FF5555"
            hasPhantomColorText = "#F2F3F4"
            break;
    }

    return(
        <motion.li className="cardContainer" variants={cardContainer} whileTap={{scale: 0.97}} >
            <div className="Head"><img src={`https://mineskin.de/helm/${name}`} alt="skin" /></div>
            <div className="Name"><FaUser/>{name}</div>
            <div className="Role" style={{color: background}}>{role}</div>
            <div className="phant">
                <span>⛏</span>
                <span className="phantStatus" style={{color: hasPhantomColorText, background: hasPhantomColor}}>{hasPhantom}</span></div>
        </motion.li>
    )
}

function RoleGrid(props){
    var background

    switch(props.role)
    {
        case "Leader":
            background = "#FF5555"
            break
        case "Co-Leader":
            background = "#55FFFF"
            break
        case "Officer":
            background = "#55FF55"
            break
        case "Member":
            background = "#FFFFFF"
            break    
        default:
            background = "#555555"
            break
    }

    return(
        <>
        <motion.ul className="seperator" style={{background: background}} variants={seperator}/>
        <motion.ul className="membersGrid" variants={membersGrid}>
                {members.filter(members => members.role === props.role).map(card =>(
                    <Card key={card.name} background={background} {...card}/>
                    ))}
        </motion.ul>
        </>
)}

const Roster = () => {
    return(
        <motion.main variants={pageVariants} className="content" initial="initial" animate="in" exit="out">
            <motion.div variants={membersGrid} initial="hidden" animate="visible">
                <RoleGrid role="Leader"/>
                <RoleGrid role="Co-Leader"/>
                <RoleGrid role="Officer"/>
                <RoleGrid role="Member"/>
                <RoleGrid role="Recruit"/>
            </motion.div>
        </motion.main>
    )
}

export default Roster