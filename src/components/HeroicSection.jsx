import React from "react";

const HeroicSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white pt-20 relative overflow-hidden"
    >


      <div className="relative text-center px-6 md:px-12 py-10 md:py-20 z-10">
        <h1 className="text-5xl font-bold text-gray-800 tracking-wide sm:text-6xl lg:text-7xl">
          Welcome to <span className="text-yellow-600">Jewldy</span>
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-600">
          Discover the finest collection of jewelry crafted with elegance.
        </p>
        <div className="mt-8">
          <a
            href="#shop"
            className="bg-yellow-600 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-700 transition-all ease-in-out duration-300 transform hover:scale-105"
          >
            Explore Our Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroicSection;
