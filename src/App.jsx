
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen"; // Importer le nouveau composant
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import TeamsPage from "./pages/TeamsPage";
import PartnersPage from "./pages/PartnersPage";
import SocialsPage from "./pages/SocialsPage";
import PolitiquesPage from "./pages/PolitiquesPage";  

const InfoIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFooterOpen, setIsFooterOpen] = useState(false);

  useEffect(() => {
    // Simuler le chargement
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Petite pause avant de faire disparaître l'écran
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Augmente la vitesse de chargement

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {loading && <LoadingScreen progress={progress} />}
      </AnimatePresence>

      {/* Contenu principal */}
      <div className={`transition-all duration-300 ${isFooterOpen ? 'blur-sm' : ''}`}>
        <Header />
        <main>
          <Routes>
          <Route index element={<HomePage />} />
          <Route path="/a-propos" element={<AboutUsPage />} />
          <Route path="/equipes" element={<TeamsPage />} />
          <Route path="/partenaires" element={<PartnersPage />} />
          <Route path="/socialhub" element={<SocialsPage />} />
          <Route path="/politiques" element={<PolitiquesPage />} />
          </Routes>
        </main>
      </div>

      {/* Bouton pour ouvrir le footer */}
      {!isFooterOpen && (
        <button
          onClick={() => setIsFooterOpen(true)}
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
    </div>
  );
}

export default App;