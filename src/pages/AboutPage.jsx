import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom"; // <-- IMPORTATIONS
import HomePage from "./pages/HomePage";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-4">À Propos</h1>
      <p className="text-xl">Ceci est la page "À Propos".</p>
    </div>
  );
};

export default AboutPage;