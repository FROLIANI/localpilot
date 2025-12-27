
const cities = [
  { name: "Zanzibar", slug: "zanzibar" },
  { name: "Dar es Salaam", slug: "dar-es-salaam" },
  { name: "Arusha", slug: "arusha" },
  { name: "Mwanza", slug: "mwanza" },
];

export default function CityGrid() {
  return (
    <section id="cities" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-8">
          Popular Cities in Tanzania
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cities.map((city) => (
            <a
              key={city.slug}
              href={`/tanzania/${city.slug}/plumbers`}
              className="p-6 border rounded-lg hover:shadow transition"
            >
              <h3 className="font-medium">{city.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
