import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Invest in the Future with MyStartup
      </h1>
      <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
        Your smart platform to connect investors with startups. Build successful partnerships and achieve real growth.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;
