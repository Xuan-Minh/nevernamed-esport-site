// src/App.jsx

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import TeamsPage from "./pages/TeamsPage";
import PartnersPage from "./pages/PartnersPage";
import SocialsPage from "./pages/SocialsPage";

function App() {
  return (
    // Ce div est le conteneur général. PAS de classes de centrage ici.
    <div>
      <Header />

      {/* La balise <main> contiendra tes pages */}
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/a-propos" element={<AboutUsPage />} />
          <Route path="/equipes" element={<TeamsPage />} />
          <Route path="/partenaires" element={<PartnersPage />} />
          <Route path="/contact" element={<SocialsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;