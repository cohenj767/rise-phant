import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Home from "./components/pages/home";
import Roster from "./components/pages/roster";
import Phantoms from "./components/pages/phantoms";

export const pageTransition = {duration: 0.3, ease: [.14,.8,.4,1]};
export const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1,
      transition: pageTransition
    },
    out: {
      opacity: 0,
      transition: pageTransition
    },
}


function App() {
    const location = useLocation();
    return (
    <div className="App">
            <Header/>
            <Navbar/>
                <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/roster" element={<Roster/>}/>
                    <Route path="/phantoms" element={<Phantoms/>}/>
                </Routes>
            </AnimatePresence>         
    </div>
  );
}

export default App;
