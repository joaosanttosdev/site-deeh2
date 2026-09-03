import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { Portfolio } from "@/components/site/portfolio";
import { About } from "@/components/site/about";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
