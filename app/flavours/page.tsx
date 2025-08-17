import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const FLAVOURS = [
  { name: "Strawberries + Cream", desc: "Vanilla cake layered with fresh strawberries and vanilla mousse" },
  { name: "Vanilla + Lemon", desc: "Vanilla cake paired with fresh lemon curd" },
  { name: "Lemon + Raspberry", desc: "Lemon cake paired with raspberry Swiss meringue" },
  { name: "Lemon + Blueberry", desc: "Lemon blueberry cake filled with a cream cheese frosting" },
  { name: "Almond + Maple", desc: "Almond cake paired with maple Swiss meringue and toasted coconut" },
  { name: "Red velvet", desc: "Red Velvet cake paired with cream cheese frosting" },
  { name: "Chocolate + Espresso", desc: "Chocolate cake paired with Espresso Mousse and chocolate ganache" },
  { name: "Coconut + Vanilla", desc: "Coconut cake paired with vanilla Swiss meringue buttercream" },
  { name: "Chocolate + Peanut", desc: "Chocolate cake paired with peanut butter mousse OR peanut butter Swiss meringue" },
  { name: "Earl Grey + Honey", desc: "Earl Grey cake paired with honey Swiss meringue + white chocolate crumble" },
  { name: "Chocolate + Hazelnut", desc: "Chocolate cake paired with Nutella Swiss meringue buttercream" },
  { name: "Dulce De Leche", desc: "Dulce de leche filling paired with your choice of cake ( vanilla recommended )" },
];

function FlavourCard({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="rounded-2xl border p-6 bg-white">
      <h3 className="font-medium text-lg">{name}</h3>
      <p className="mt-2 text-sm text-neutral-700">{desc}</p>
    </div>
  );
}

export default function FlavoursPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl font-serif mb-8">Flavours</h1>
          <div className="grid md:grid-cols-2 gap-6">
            {FLAVOURS.map((f) => (
              <FlavourCard key={f.name} {...f} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
