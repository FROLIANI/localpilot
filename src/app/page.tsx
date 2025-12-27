import { Hero, CityGrid, CategoryGrid,Header,HeroSearch } from "@/components";

export const metadata = {
  title: "LocalPilot – Discover Local Businesses in Tanzania",
  description:
    "Find trusted local businesses in Tanzania. Browse services by city and category with LocalPilot.",
};

export default function HomePage() {
  return (
    <main>
      <Header/>
      <HeroSearch/>
      <Hero />
      {/* <CityGrid /> */}
      {/* <CategoryGrid /> */}
    </main>
  );
}
