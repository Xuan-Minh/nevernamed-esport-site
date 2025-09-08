import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/common/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/layout/LoadingScreen';
import React, { Suspense } from 'react';
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutUsPage = React.lazy(() => import('./pages/AboutUsPage'));
const TeamsPage = React.lazy(() => import('./pages/TeamsPage'));
const PartnersPage = React.lazy(() => import('./pages/PartnersPage'));
const SocialsPage = React.lazy(() => import('./pages/SocialsPage'));
const PolitiquesPage = React.lazy(() => import('./pages/PolitiquesPage'));
const MentionsLegalesPage = React.lazy(() => import('./pages/MentionsLegalesPage'));
const TermsPage = React.lazy(() => import('./pages/TermsPage'));

import 'flag-icons/css/flag-icons.min.css';
import './i18n';

const InfoIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFooterOpen, setIsFooterOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Signature supprimée (voir commentaire en haut du fichier)

  // Effet pour simuler le chargement
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
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
      <AnimatePresence>{loading && <LoadingScreen progress={progress} />}</AnimatePresence>

      {!loading && (
        <>
          <ScrollToTop />
          <Header isOpen={isOpen} setIsOpen={setIsOpen} /> {/* Passe les props */}
          <div className="transition-all duration-300">
            <main
              className={`overflow-x-hidden transition-all duration-300 ${isFooterOpen ? 'blur-sm' : ''}`}
            >
              <AnimatePresence
                mode="wait"
                onExitComplete={() => setIsTransitioning(false)}
                onEnter={() => setIsTransitioning(true)}
              >
                <Routes location={location} key={location.pathname}>
                  <Route
                    index
                    element={
                      <Suspense fallback={<div>Chargement de la page d'accueil…</div>}>
                        <HomePage isLoading={loading} />
                      </Suspense>
                    }
                  />

                  <Route
                    path="/a-propos"
                    element={
                      <Suspense fallback={<div>Chargement de la page à propos…</div>}>
                        <AboutUsPage />
                      </Suspense>
                    }
                  />

                  <Route
                    path="/equipes"
                    element={
                      <Suspense fallback={<div>Chargement de la page équipes…</div>}>
                        <TeamsPage />
                      </Suspense>
                    }
                  />

                  <Route
                    path="/partenaires"
                    element={
                      <Suspense fallback={<div>Chargement de la page partenaires…</div>}>
                        <PartnersPage />
                      </Suspense>
                    }
                  />

                  <Route
                    path="/socialhub"
                    element={
                      <Suspense fallback={<div>Chargement du Social Hub…</div>}>
                        <SocialsPage />
                      </Suspense>
                    }
                  />

                  <Route
                    path="/politiques"
                    element={
                      <Suspense fallback={<div>Chargement de la page politiques…</div>}>
                        <PolitiquesPage />
                      </Suspense>
                    }
                  />

                  <Route
                    path="/mentions-legales"
                    element={
                      <Suspense fallback={<div>Chargement de la page mentions légales…</div>}>
                        <MentionsLegalesPage />
                      </Suspense>
                    }
                  />

                  <Route
                    path="/terms"
                    element={
                      <Suspense fallback={<div>Chargement de la page conditions…</div>}>
                        <TermsPage />
                      </Suspense>
                    }
                  />
                </Routes>
              </AnimatePresence>
            </main>
          </div>
          {/* Bouton pour ouvrir le footer */}
          {!isFooterOpen && (
            <button
              onClick={() => {
                if (!isTransitioning) {
                  setIsFooterOpen(true);
                  setIsOpen(false); // <-- Ferme le menu mobile si ouvert
                }
              }}
              className={`fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors z-40${isTransitioning ? ' opacity-50 pointer-events-none' : ''}`}
              aria-label="Ouvrir les informations du site"
              disabled={isTransitioning}
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
