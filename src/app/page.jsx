import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
