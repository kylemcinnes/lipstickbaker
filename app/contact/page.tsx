export default function ContactPage() {
  const flavourOptions = [
    "Vanilla cake, vanilla mousse, fresh strawberries",
    "Chocolate cake, dulce de leche filling",
    "Lemon cake, raspberry filling",
    "Chocolate cake, chocolate ganache",
    "Chocolate cake, hazelnut buttercream",
    "Chocolate cake, peanut butter buttercream",
    "Red velvet cake, cream cheese filling",
    "Lemon blueberry cake, cream cheese filling",
    "Banana cake, cinnamon cream cheese fillling",
    "Chocolate cake, vanilla mousse, cherry filling",
    "Confetti cake, birthday cake buttercream",
    "Almond cake, maple filling, toasted coconut",
    "Vanilla cake, lemon curd",
    "Chocolate cake, espresso mousse, chocolate ganache",
    "Apple pie cake, caramel Swiss meringue-buttercream, salted caramel drizzle",
    "Coconut cake, vanilla Swiss meringue buttercream",
    "Earl grey cake, white chocolate crumble, honey Swiss meringue",
    "Pistachio cake, white chocolate ganache",
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12" id="contact">
      <h1 className="text-3xl font-serif mb-8">Thanks for inquiring!</h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name*</label>
          <input className="mt-1 w-full rounded-md border p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Email*</label>
          <input type="email" className="mt-1 w-full rounded-md border p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone Number*</label>
          <input className="mt-1 w-full rounded-md border p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Event Date*</label>
          <input type="date" className="mt-1 w-full rounded-md border p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">How many people are you looking to feed? (minimum 10 servings)*</label>
          <input type="number" min={10} className="mt-1 w-full rounded-md border p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Please share your ideas!</label>
          <textarea className="mt-1 w-full rounded-md border p-2" rows={5} />
        </div>
        <div>
          <label className="block text-sm font-medium">Upload one or more pictures of your cake inspiration!</label>
          <input type="file" multiple accept="image/*" className="mt-1 w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium">What flavor(s) would you like?</label>
          <select multiple className="mt-1 w-full rounded-md border p-2 h-40">
            {flavourOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <input id="ok" type="checkbox" className="rounded" />
          <label htmlFor="ok">It's okay if you don't know yet! We can help you decide.</label>
        </div>
        <button type="submit" className="rounded-xl border px-4 py-2">Submit</button>
      </form>
    </div>
  );
}
