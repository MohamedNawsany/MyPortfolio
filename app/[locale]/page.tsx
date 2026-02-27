import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import About from '@/components/organisms/About';
import Skills from '@/components/organisms/Skills';
import Experience from '@/components/organisms/Experience';
import Projects from '@/components/organisms/Projects';
import Education from '@/components/organisms/Education';
import Contact from '@/components/organisms/Contact';
import Footer from '@/components/organisms/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
