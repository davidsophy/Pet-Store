import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { LuDog ,LuCat, LuToyBrick, LuFish, LuBird, LuRabbit  } from "react-icons/lu";



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
const categories = [
    {
      name: 'Dog Food',
     icon: <LuDog className="w-8 h-8" />,
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Cat Food',
      icon: <LuCat className="w-8 h-8"/>,
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Toys',
      icon:<LuToyBrick className="w-8 h-8"/> ,
      bgColor: 'bg-yellow-50'
    },
    {
      name: 'Healthcare',
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bandaid" viewBox="0 0 16 16">
  <path d="M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26 1.127-1.165a3 3 0 0 0 0-4.242M12.293 8 8.027 3.734 3.738 8.031 8 12.293zm-5.006 4.994L3.03 8.737 1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006 1.16-1.121ZM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492z"/>
  <path d="M5.56 7.646a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708Zm1.415-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707M8.39 4.818a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707Zm0 5.657a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707ZM9.803 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707Zm1.414-1.414a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708ZM6.975 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707ZM8.39 7.646a.5.5 0 1 1-.708.708.5.5 0 0 1 .707-.708Zm1.413-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707"/>
</svg>
      ),
      bgColor: 'bg-green-50'
    },
    {
      name: 'Assessories',
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-sunglasses text-2xl" viewBox="0 0 16 16">
  <path d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A2 2 0 0 0 8 6a2 2 0 0 0-1.112.338A2 2 0 0 0 5 5zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1"/>
</svg>
      ),
      bgColor: 'bg-pink-50'
    },
    {
      name: 'Fish Food',
      icon:<LuFish className="w-8 h-8"/> ,
      bgColor: 'bg-orange-50'
    },
    {
      name: 'Bird Food',
      icon: <LuBird className="w-8 h-8"/> ,
      bgColor: 'bg-indigo-50'
    },
    {
      name: 'Rabbit Food',
      icon: <LuRabbit className="w-8 h-8"/> ,
      bgColor: 'bg-gray-50'
    }
  ]
const handleClick = (name) => {
  console.log(`Clicked on ${name} category`);
};

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
          className={`relative min-h-120 ${slide.bg} rounded-4xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between transition-colors duration-1000 ease-in-out overflow-hidden`}>
          {/* LEFT TEXT CONTENT */}
          <div
            key={index} // Key forces re-render for animation
            className="z-10 max-w-lg space-y-4 animate-in fade-in slide-in-from-left-5 duration-700">
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

     
      <HeroSlider />
      {/* Featured Section */}
      <section className="top-category bg-gray-50 p-6">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Top Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`${category.bgColor} rounded-lg p-4 flex flex-col items-center justify-center h-32 cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105`}>
                <div className="text-gray-700 mb-2">{category.icon}</div>
                <p className="text-sm font-medium text-gray-800 text-center">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">New & Trending</h2>
          <div className="w-16 h-1 bg-blue-500 mt-2 rounded"></div>
        </div>
        <button className="text-blue-600 font-medium hover:underline">
          View All →
        </button>
      </div>

      {/* Product Card */}
      <div className="w-[280px] bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Dog Food"
            className="w-full h-64 object-cover"
          />

          {/* NEW badge */}
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
            NEW
          </span>

          {/* Heart */}
          <a href="absolute top-3 right-3 bg-white p-2 rounded-full shadow"><i class="bi bi-heart text-gray-400 hover:text-red-500"></i></a>
         
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-1xl font-bold text-gray-500 uppercase mb-1">Dog Food</p>
          <h3 className="font-semibold text-lg mb-3 text-black">
            Freshpet Digestive Turkey
          </h3>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">$18.99</span>
            <a href="" className="bg-blue-400 text-black px-5 py-2 rounded-lg font-extrabold text-1xl hover:bg-blue-500"><i class="bi bi-basket3"></i></a>
            <a href="" className="bg-blue-600 text-black font-black hover:text-black px-4 py-2 rounded-lg text-sm hover:bg-blue-700">View Detail</a>
          </div>
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
