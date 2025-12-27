
export default function Hero() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Discover Trusted Local Businesses in Tanzania
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          LocalPilot helps you find plumbers, electricians, designers, and more —
          by city and service.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/tanzania/zanzibar/plumbers"
            className="px-6 py-3 bg-black text-white rounded-md text-sm font-medium"
          >
            Explore Services
          </a>

          <a
            href="#cities"
            className="px-6 py-3 border border-gray-300 rounded-md text-sm font-medium"
          >
            Browse Cities
          </a>
        </div>
      </div>
    </section>
  );
}
