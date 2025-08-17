export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="py-16 text-center">
        <h1 className="font-serif text-5xl leading-tight whitespace-pre-line">
{`OUR CAKES ARE
HANDCRAFTED
WITH LOVE.`}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg">
          Taste and quality are our top priority. Not only visually appealing, your custom cake will be made to order with only the freshest of ingredients. It's subtle sweetness will allow for guilt-free indulges!
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <a href="/contact#contact" className="block rounded-2xl border p-6">
          <h3 className="font-medium">Order Online Here</h3>
        </a>
        <a href="/details" className="block rounded-2xl border p-6">
          <h3 className="font-medium">Order Information</h3>
        </a>
        <a href="/contact#contact" className="block rounded-2xl border p-6">
          <h3 className="font-medium">Customize Your Cake</h3>
        </a>
      </section>

      <section className="py-16">
        <h4 className="text-sm tracking-wide font-semibold">MY CAKE COLLECTION</h4>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-neutral-200" />
          ))}
        </div>
        <p className="sr-only">To play, press and hold the enter key. To stop, release the enter key.</p>
      </section>

      <section className="py-8">
        <h5 className="text-base font-semibold mb-4">INSTAGRAM</h5>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-md bg-neutral-200" />
          ))}
        </div>
      </section>
    </div>
  );
}
