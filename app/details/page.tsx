export default function DetailsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 space-y-6">
      <h1 className="text-3xl font-serif">HOW TO ORDER</h1>
      <p className="text-lg">Information + FAQ's</p>
      <p>Thank you for your interest!</p>
      <p>Please refer to the following guidelines + FAQ's before submitting your order.</p>
      <p>All orders require a 50% retainer to reserve your date.</p>
      <p>Order balances are required a week prior to your event. In the event that your balance is not paid, a reminder will be sent with a grace period of one day. If your balance is still not paid, your order will be cancelled and your retainer forfeited.</p>
      <p>Orders booked &gt;1 week in advance require payment in full.</p>
      <p>ALL orders under $150 must be paid in full at the time of booking.</p>
      <p>Payments can be made in person or through online banking.</p>
      <p>Please note all payments are non refundable.</p>
      <p>Payments may be transferred to a future date if we are notified two weeks prior to your event.</p>
      <p>Cancellations initiated less than two weeks prior would result in automatic forfeiting of your payment.</p>
      <p>In the event of a mistaken flavour or design aspect, a credit decided by Lipstick Baker will be issued.</p>
      <p>All details (design, cake size, flavour etc.) for your cake order must be finalized at the time of booking and may be changed up until the final payment is due/week prior.</p>

      <h2 className="text-2xl font-serif mt-8">Pick up</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>During summer months, your vehicle must be air conditioned.</li>
        <li>Please have a large, flat area available to when collecting your cake. Transporting on a soft or angled car seat can cause cracking due to bouncing and bending of the cake board. 3-D and tiered cakes are especially fragile and require a flat surface. The floor area in front of your passenger seat is most commonly used.</li>
      </ul>

      <h2 className="text-2xl font-serif mt-8">Delivery</h2>
      <p>There is a $2.50 per km fee on all deliveries.</p>

      <h2 className="text-2xl font-serif mt-8">Florals + Figures</h2>
      <p>Please note all florals are attached with floral wire + tape.</p>
      <p>Figure may include floral wire and/or lollipop ticks to allow them to be structurally sound. Please remove structures before consuming.</p>
      <p>We do not recommend consuming sugar florals.</p>

      <h2 className="text-2xl font-serif mt-8">Stand Rental</h2>
      <p>We currently do not rent our stands, but do provide stands for purchase at the rate of $40. Stands are highly recommended for weddings!</p>

      <h2 className="text-2xl font-serif mt-8">FAQ's</h2>

      <h3 className="text-xl font-semibold mt-6">Pricing</h3>
      <p>Prices depend on many factors! Some of which include: date availability, the amount of servings needed and the intricacy of design.</p>
      <p>Prices start at $100 for 10-12 servings!</p>

      <h3 className="text-xl font-semibold mt-6">Sizing</h3>
      <p>The smallest single tier serves 10.</p>
      <p>The smallest two tier serves 30-40.</p>
      <p>The smallest three tier serves 60-70.</p>

      <h3 className="text-xl font-semibold mt-6">Lead time</h3>
      <p>Typically, two-three weeks notice is required to place your order (pending available spots). Feel free to inquire if you require a last minute cake! I'll do my best to accommodate or reccomend other bakers in the area!</p>

      <h3 className="text-xl font-semibold mt-6">Wedding Sample Boxes</h3>
      <p>Boxes include your choice of 3 flavours for $50. Wedding cakes over $480 include a mini cake sample box and will be credited the $50 towards their final balance!<


mkdir -p app/flavours
cat > app/flavours/page.tsx << 'EOF'
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

function Card({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="rounded-2xl border p-6 bg-white">
      <h3 className="font-medium text-lg">{name}</h3>
      <p className="mt-2 text-sm text-neutral-700">{desc}</p>
    </div>
  );
}

export default function FlavoursPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-serif mb-8">Flavours</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {FLAVOURS.map((f) => <Card key={f.name} {...f} />)}
      </div>
    </div>
  );
}
