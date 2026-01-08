import React from "react";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white flex flex-col items-center justify-center h-screen w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Welcome to Petzone
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-center">
          Your one-stop shop for all your pet needs!
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Shop Now
        </button>
      </section>

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
