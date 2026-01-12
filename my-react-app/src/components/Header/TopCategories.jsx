import React from "react";

const categories = [
  { name: "Books", icon: "fa-book", bg: "bg-blue-500" },
  { name: "Home", icon: "fa-home", bg: "bg-green-500" },
  { name: "Tools", icon: "fa-tools", bg: "bg-purple-500" },
  { name: "Food", icon: "fa-utensils", bg: "bg-red-500" },
  { name: "Music", icon: "fa-music", bg: "bg-yellow-500" },
  { name: "Shopping", icon: "fa-shopping-bag", bg: "bg-pink-500" },
  { name: "Travel", icon: "fa-plane", bg: "bg-indigo-500" },
  { name: "Sports", icon: "fa-running", bg: "bg-orange-500" },
];

const TopCategories = () => {
  const handleClick = (category) => {
    console.log(`Clicked on ${category} category`);
  };

  return (
    <section className="bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Top Categories
        </h1>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item.name)}
              className={`cursor-pointer ${item.bg} rounded-xl p-6 flex flex-col items-center justify-center h-32
                transition transform hover:-translate-y-1 hover:shadow-xl`}
            >
              <i className={`fas ${item.icon} text-white text-3xl mb-2`} />
              <span className="text-white font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Explore more categories
          </p>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
