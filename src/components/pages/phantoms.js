import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../App';
import { picks } from "./../picks";
import {CircleProgress} from 'react-gradient-progress'
import { IconContext } from "react-icons";
import phantImg from "../../media/netherrite_pick.png";
import {MdLocationOn, MdOutlineIosShare} from "react-icons/md";
import {RiUserAddFill} from "react-icons/ri";

const phantList = {
    hidden: {},
    visible: { 
        transition: {
            staggerChildren: .06,
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
            duration: 0.6,
            ease: [.14,.8,.4,1]
        },
    },

};

function Phantom({id, owner, upgradeLvl, isSharing, firstPrio, secondPrio, location}) {
    var progress
    var shareColor = "#FF5555"
    var shareColorText = "#F2F3F4"
    var shareStatus = "Nope"

    if (isSharing) {
            shareColor = "#55FF55"
            shareColorText = "#071824"
            shareStatus = "Yos"
    }

    progress = upgradeLvl.reduce((x, y) => x + y)*100 / 2500;

    return(
        <motion.li className="phantCard" variants={phantCard} whileHover={{scale: 1.02}}>
            <span className="phantTitle">{owner}</span>
            <div className="phantContainer mobile-grid">
                <div className="phantDetails">
                    <span># {id} </span>
                    <div className="line"/>
                    <span><RiUserAddFill/>{" "}Prio 1: {firstPrio}</span>
                    <div className="line"/>
                    <span><RiUserAddFill/>{" "}Prio 2: {secondPrio}</span>
                </div>
                <div className="phantUpgrades">
                    <div className="upgradeCont">
                        <img src={phantImg} alt="pick"/>
                        <CircleProgress percentage={progress} width={110} primaryColor={['#6EFFE9','#BF52BF']}/>
                    </div>
                    <div className="line" style={{margin: "1rem", backgroundColor: "#6EFFE9", boxShadow: "0 0 4px var(--prim-acc-color)"}}/>
                    {upgradeLvl[0]} |  {upgradeLvl[1]}  |  {upgradeLvl[2]}
                </div>
                <div className="phantMisc">
                    <div className="phantShare"><MdOutlineIosShare/>{" "}Shared:{" "} 
                        <span className="phantStatus" style={{color: shareColorText, background: shareColor}}>{shareStatus}</span></div>
                    <div className="line"/>
                    <div className="phantLoc"><MdLocationOn/>{" " + location}</div>
                </div>
            </div>
        </motion.li>
    )
}


const Phantoms = () => {
    return(
        <IconContext.Provider value={{ style: { verticalAlign: 'bottom', color: "#6EFFE9", fontSize: "1.4rem", margin: "5px" } }}>
        <motion.main className="content" initial="initial" animate="in" exit="out" variants={pageVariants}>
            <motion.div variants={phantList} initial="hidden" animate="visible">
                <motion.ul className="phantList mobile-gaps">
                    {picks.map(pick => (
                    <Phantom key={pick.id} {...pick}/>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.main>
        </IconContext.Provider>
    )
}

export default Phantoms