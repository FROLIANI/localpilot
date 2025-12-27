
const categories = [
  { name: "Plumbers", slug: "plumbers" },
  { name: "Electricians", slug: "electricians" },
  { name: "Web Designers", slug: "web-designers" },
  { name: "Carpenters", slug: "carpenters" },
];

export default function CategoryGrid() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-8">
          Popular Service Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.slug}
              className="p-6 bg-white border rounded-lg"
            >
              <h3 className="font-medium">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
