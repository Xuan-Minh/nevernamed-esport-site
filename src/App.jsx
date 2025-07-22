//cd../../MAMP/htdocs/nevernamed-esport-site
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useOutlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './App.css';

// Palette de couleurs basée sur #000719
const colors = ["#000719", "#0c163e", "#182563", "#243488", "#3043ad"];

const Triangle = ({ color, delay }) => (
  <motion.div
    className="w-full h-full"
    style={{ backgroundColor: color, clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
    initial={{ transform: 'scaleY(0)', opacity: 0 }}
    animate={{ transform: 'scaleY(1)', opacity: 1, transition: { duration: 0.5, delay } }}
    exit={{ transform: 'scaleY(0)', opacity: 0, transition: { duration: 0.5, delay: delay + 0.2 } }}
  />
);

const Transition = () => (
  <div className="fixed top-0 left-0 w-full h-screen grid grid-cols-10 grid-rows-5 pointer-events-none z-50">
    {[...Array(50)].map((_, i) => (
      <Triangle key={i} color={colors[i % colors.length]} delay={Math.random() * 0.4} />
    ))}
  </div>
);

const AnimatedOutlet = () => {
  const o = useOutlet();
  const [outlet] = React.useState(o);

  return <>{outlet}</>;
};

function App() {
  const location = useLocation();

  return (
    <>
      <nav className="p-4 bg-gray-800/50 fixed top-4 left-1/2 -translate-x-1/2 rounded-lg z-10">
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-blue-400 transition-colors">Accueil</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 transition-colors">À Propos</Link></li>
        </ul>
      </nav>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Transition />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

// Il faut envelopper l'application dans le Router dans main.jsx
export default App;