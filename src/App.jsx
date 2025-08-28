import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/common/ScrollToTop";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LoadingScreen from "./components/layout/LoadingScreen";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import TeamsPage from "./pages/TeamsPage";
import PartnersPage from "./pages/PartnersPage";
import SocialsPage from "./pages/SocialsPage";
import PolitiquesPage from "./pages/PolitiquesPage";
import MentionsLegalesPage from "./pages/MentionsLegalesPage";
import TermsPage from "./pages/TermsPage";

import 'flag-icons/css/flag-icons.min.css';
import './i18n'; 

const InfoIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Signature à afficher dans la console du navigateur
const showSignature = () => {
  const signatureStyles = [
    'color: #F89C2C', // Orange
    'font-size: 1.2em',
    'font-weight: bold',
    'font-family: monospace',
  ].join(';');

  const textStyles = 'font-family: sans-serif;';
  console.log('%cSite développé par Xuan-Minh TRAN - https://xuan-minh.github.io/', textStyles);
};

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFooterOpen, setIsFooterOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // <-- Ajoute ici


    // Affiche la signature une seule fois au montage du composant
  useEffect(() => {
    showSignature();
  }, []);


  // Effet pour simuler le chargement
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // Effet pour bloquer le scroll pendant le chargement
  useEffect(() => {
    if (loading) {
      document.body.classList.add('loading-active');
    } else {
      document.body.classList.remove('loading-active');
    }

    return () => {
      document.body.classList.remove('loading-active');
    };
  }, [loading]);

      return (
        <div className="relative min-h-screen">
          <AnimatePresence>
            {loading && <LoadingScreen progress={progress} />}
          </AnimatePresence>

          {!loading && (
            <>
              <ScrollToTop />
              <div className={`transition-all duration-300 ${isFooterOpen ? 'blur-sm' : ''}`}>
                <Header isOpen={isOpen} setIsOpen={setIsOpen} /> {/* Passe les props */}
                <main className="overflow-x-hidden">
              <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route index element={<HomePage isLoading={loading} />} />
                <Route path="/a-propos" element={<AboutUsPage />} />
                <Route path="/equipes" element={<TeamsPage />} />
                <Route path="/partenaires" element={<PartnersPage />} />
                <Route path="/socialhub" element={<SocialsPage />} />
                <Route path="/politiques" element={<PolitiquesPage />} />
                <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
                  <Route path="/terms" element={<TermsPage />} /> 
              </Routes>
              </AnimatePresence>
            </main>
          </div>

      {/* Bouton pour ouvrir le footer */}
          {!isFooterOpen && (
            <button
              onClick={() => {
                setIsFooterOpen(true);
                setIsOpen(false); // <-- Ferme le menu mobile si ouvert
              }}
              className="fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors z-40"
              aria-label="Ouvrir les informations du site"
            >
              <InfoIcon />
            </button>
          )}

          {/* Le Footer animé */}
          <AnimatePresence>
            {isFooterOpen && <Footer handleClose={() => setIsFooterOpen(false)} />}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;