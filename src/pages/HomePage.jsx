import React from 'react';
import Separator from '../components/Separator';
import SponsorsBanner from '../components/SponsorsBanner';


const HomePage = () => {
  return (
     <div className="min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="font-unbounded text-5xl font-bold mb-4">HOME PAGE</h1>
      <p className="text-xl">Ceci est la page "À Propos".</p>
      <Separator/>
      <SponsorsBanner/>
      <Separator/>  
    </div>
  );
};

export default HomePage;