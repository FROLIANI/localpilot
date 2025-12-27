
export default function HeroSearch() {
  return (
    <section
      className="relative bg-cover bg-center h-130"
      style={{
        backgroundImage: "url('/hero-directory.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
          Launch. Monetize. Grow.
          <br />
          <span className="font-extrabold">
            Find Local Businesses in Tanzania
          </span>
        </h1>

        <p className="text-gray-200 mt-4 text-lg max-w-2xl">
          Search trusted professionals by service and location.
        </p>

        {/* Search Box */}
        <div className="mt-8 bg-white rounded-md shadow-lg p-4 flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 border border-gray-300 px-4 py-3 rounded-md text-sm focus:outline-none"
          />

          <input
            type="text"
            placeholder="City or Location"
            className="flex-1 border border-gray-300 px-4 py-3 rounded-md text-sm focus:outline-none"
          />

          <button
            className="bg-red-600 text-white px-6 py-3 rounded-md text-sm font-semibold"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
