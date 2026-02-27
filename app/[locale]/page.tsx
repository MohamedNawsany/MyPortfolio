import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import About from '@/components/organisms/About';
import Skills from '@/components/organisms/Skills';
import Experience from '@/components/organisms/Experience';
import Projects from '@/components/organisms/Projects';
import Education from '@/components/organisms/Education';
import Contact from '@/components/organisms/Contact';
import Footer from '@/components/organisms/Footer';

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

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
