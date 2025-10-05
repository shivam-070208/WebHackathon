import React, { useEffect } from "react";
import CustomerDashboard from "./components/Consumerstats";
import SwitchCarousel from "./components/SwitchCarousel";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import HeroicSection from "./components/HeroicSection";
import AmzigoPage from "./components/AmzigoPage";

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Duration for smooth scroll (in seconds)
      easing: (t) => t * (2 - t), // Easing function (default is easeInOutQuad)
      smoothWheel: true, // Smooth out the wheel scroll
      smoothTouch: false, // Disable smooth scrolling for touch
      direction: "vertical", // Scroll direction
    });

    // Animation loop to update Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup Lenis on unmount
    return () => lenis.destroy();
  }, []);

  return (
    <div className="roboto-flex bg-white/35">
      <Navbar />
      <HeroicSection />
      <SwitchCarousel />
      <AmzigoPage />
      <CustomerDashboard />
    </div>
  );
}

export default App;
