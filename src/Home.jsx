function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center p-10">
      {/* Logo + Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">e‑Shop</h1>

      {/* Hero Section */}
      <h2 className="text-4xl font-bold text-blue-800 mb-4">
        Your One‑Stop Online Store
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl text-center mb-10 leading-relaxed">
        Discover fashion, electronics, home essentials, and lifestyle products —
        all in one place. Shop securely, enjoy personalized recommendations, and
        get fast doorstep delivery. e‑Shop makes shopping simple, safe, and fun.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition transform">
          <h3 className="text-xl font-semibold text-pink-600 mb-3">👗 Fashion</h3>
          <p className="text-gray-600">
            Stay trendy with the latest styles and accessories curated just for you.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition transform">
          <h3 className="text-xl font-semibold text-purple-600 mb-3">💻 Electronics</h3>
          <p className="text-gray-600">
            Upgrade your tech with smartphones, laptops, and gadgets at great prices.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition transform">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">🏠 Home Essentials</h3>
          <p className="text-gray-600">
            Find everything you need to make your home comfortable and stylish.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <button
        id="btn"
        className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Start Shopping
      </button>
    </div>
  );
}

export default Home;
