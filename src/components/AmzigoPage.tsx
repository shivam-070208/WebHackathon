import React, { useEffect, useRef } from "react";

const AmzigoPage = () => {
  const section2Ref = useRef(null); // Reference to the testimonials section
  const testimonialCardsRef = useRef([]); // Reference to testimonial cards

  useEffect(() => {
    // Get the references to elements after the component has mounted
    testimonialCardsRef.current =
      document.querySelectorAll(".testimonial-card");
    const section2 = section2Ref.current;

    if (!section2) return; // Return early if section2 is not found

    function isInViewport(element, offset = 100) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight + offset &&
        rect.right <= window.innerWidth + offset
      );
    }

    function animateTestimonials() {
      if (!section2 || !testimonialCardsRef.current) return;

      const section2Rect = section2.getBoundingClientRect();
      const sectionHeight = section2.offsetHeight;

      let scrollProgress =
        (window.innerHeight - section2Rect.top) / sectionHeight;
      scrollProgress = Math.max(0, Math.min(1, scrollProgress));

      testimonialCardsRef.current.forEach((card, index) => {
        const speed = parseFloat(card.dataset.scrollSpeed || "1");

        const activationPoint = (index + 1) * 0.2;

        if (scrollProgress >= activationPoint) {
          card.style.opacity = "1";
          const translateY = scrollProgress * speed * 200 - 200;
          card.style.transform = `translateY(${translateY}px) scale(1)`;
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(100px) scale(0.8)";
        }
      });
    }

  

    function handleScroll() {
      animateTestimonials();

    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set the animations

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-smooth bg-[#4c009a]">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center bg-[#4c009a] text-white snap-start">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#4c009a] to-[#1e003a] opacity-30 animate-pulse"></div>
        <div className="z-10 text-center">
          <p className="text-lg tracking-wide uppercase text-opacity-70">
            Customer Testimonials
          </p>
          <h1 className="text-8xl font-semibold">Happy Sellers</h1>
        </div>
      </section>

    

      {/* PRICING SECTION */}
      <section className="relative flex flex-col min-h-screen py-24 px-12 snap-start bg-[#4c009a]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#4c009a] to-[#1e003a] opacity-30 animate-pulse"></div>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl mb-3 text-white">
            Find the perfect plan based on your monthly order volume.
          </h2>
          <p className="text-white">
            Whether you’re just starting out or scaling fast...
          </p>
          <p className="mt-8 text-xl text-opacity-70 text-white">
            Subscriptions start from just{" "}
            <span className="font-bold">$15.99 per month</span>.
          </p>
        </div>

        <div className="flex gap-6 justify-center">
          <div className="pricing-card opacity-0 transform translate-y-[50px] transition-all duration-800 p-8 bg-[#4c009a] text-white rounded-xl shadow-lg">
            <h3 className="text-2xl">Starter</h3>
            <p className="text-sm opacity-80">Up to 500 orders per month</p>
            <p className="mt-4 text-sm">
              Perfect for small businesses or individuals...
            </p>
            <p className="mt-6 text-3xl font-bold">
              $15.99 <span className="text-xl">per month</span>
            </p>
            <button className="mt-6 px-6 py-2 bg-[#1e003a] rounded-md hover:bg-black transition-colors">
              Select Plan
            </button>
          </div>

          <div className="pricing-card popular opacity-0 transform translate-y-[50px] transition-all duration-800 p-8 bg-[#4c009a] text-white rounded-xl shadow-lg">
            <span className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-white text-[#4c009a] px-4 py-1 rounded-full text-xs font-bold">
              MOST POPULAR
            </span>
            <h3 className="text-2xl">Growth</h3>
            <p className="text-sm opacity-80">Up to 2,500 orders per month</p>
            <p className="mt-4 text-sm">
              Ideal for sellers who are expanding their product range...
            </p>
            <p className="mt-6 text-3xl font-bold">
              $29.99 <span className="text-xl">per month</span>
            </p>
            <button className="mt-6 px-6 py-2 bg-[#1e003a] rounded-md hover:bg-black transition-colors">
              Select Plan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmzigoPage;
