export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headlines */}
          <div className="space-y-4">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              OUR CAKES ARE
            </h1>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              HANDCRAFTED
            </h1>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              WITH LOVE.
            </h1>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-2xl mx-auto">
            <p className="font-body text-lg sm:text-xl text-gray-600 leading-relaxed">
              Taste and quality are our top priority. Our cakes are handcrafted with love using the finest ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
