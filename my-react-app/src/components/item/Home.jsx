import React, { useState, useEffect } from "react";
import Header from "../Header/Header";

const slides = [
  {
    subtitle: "Up to",
    title: "45% OFF",
    desc: "Thousands of pet favourites",
    image: "/image/Dog/dog1.png",
    bg: "bg-blue-200", // Soft Blue
  },
  {
    subtitle: "Special Offer",
    title: "30% OFF",
    desc: "Healthy food for your pets",
    image: "/image/Dog/dog2.png",
    bg: "bg-green-200", // Soft Green
  },
  {
    subtitle: "Limited Time",
    title: "Buy 1 Get 1",
    desc: "Toys & accessories",
    image: "/image/Dog/dog3.png",
    bg: "bg-purple-200", // Soft Purple
  },
];

function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="w-full flex justify-center py-6 bg-white">
      {/* Container restricted to 90% or max-width for better look on big screens */}
      <div className="w-full max-w-7xl px-6">
        {/* The Card - using slide.bg dynamically */}
        <div
          className={`relative min-h-120 ${slide.bg} rounded-4xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between transition-colors duration-1000 ease-in-out overflow-hidden`}
        >
          {/* LEFT TEXT CONTENT */}
          <div
            key={index} // Key forces re-render for animation
            className="z-10 max-w-lg space-y-4 animate-in fade-in slide-in-from-left-5 duration-700"
          >
            <p className="text-lg font-extrabold text-gray-700 uppercase tracking-wide">
              {slide.subtitle}
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-blue-900 leading-tight">
              {slide.title}
            </h1>

            <p className="text-2xl text-gray-800 font-medium">{slide.desc}</p>
             

            <button className="mt-4 bg-emerald-900 text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-lg">
              Shop Now →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mt-8 md:mt-0 flex justify-center items-end">
            <img
              key={slide.image}
              src={slide.image}
              alt="Pet Promotion"
              className="w-full max-w-[350px] md:max-w-[450px] object-contain animate-in fade-in zoom-in-95 duration-700"
            />
          </div>

          {/* DOTS NAVIGATION */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer h-2 ${
                  i === index
                    ? "w-8 bg-gray-800" // Active: elongated pill
                    : "w-2 bg-gray-400 hover:bg-gray-600" // Inactive: small dot
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSlider />
      {/* Featured Section */}
      <section className="py-16 w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-6">
          {/* Product Card */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 1"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Dog Food</h3>
            <p className="text-gray-600 mb-4">$25.00</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 2"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Cat Toy</h3>
            <p className="text-gray-600 mb-4">$12.00</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 3"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Bird Cage</h3>
            <p className="text-gray-600 mb-4">$50.00</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto w-full text-center">
        <p>© 2026 Petzone. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
