import About from "@/Components/About";
import Hero from "@/Components/Hero";
import NavBar from "@/Components/Navbar";
import Portfolio from "@/Components/Portfolio";
import Skills from "@/Components/Skills";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
