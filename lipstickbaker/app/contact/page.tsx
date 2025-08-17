import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
