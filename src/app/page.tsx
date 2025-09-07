import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Activities from "@/components/Activities";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      {/* Center the whole page content */}
      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Activities />
      </main>
      <Footer />
    </>
  );
}
