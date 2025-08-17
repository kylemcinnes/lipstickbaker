import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Lipstick Baker",
  description: "Handcrafted custom cakes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#faf7f5] text-neutral-900">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-serif text-xl">Lipstick Baker</Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/" className="hover:opacity-70">Home</Link>
              <Link href="/details" className="hover:opacity-70">FAQ</Link>
              <Link href="/flavours" className="hover:opacity-70">Flavours</Link>
              <Link href="/contact" className="hover:opacity-70">Contact + Custom Orders</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-500">© 2019 by Lipstick Baker</div>
        </footer>
      </body>
    </html>
  );
}
