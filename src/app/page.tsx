import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { Trusted } from '@/components/sections/trusted';
import { Features } from '@/components/sections/features';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Security } from '@/components/sections/security';
import { Comparison } from '@/components/sections/comparison';
import { Developers } from '@/components/sections/developers';
import { FAQ } from '@/components/sections/faq';
import { DownloadSection } from '@/components/sections/download';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Trusted />
      <Features />
      <HowItWorks />
      <Security />
      <Comparison />
      <Developers />
      <FAQ />
      <DownloadSection />
      <Contact />
      <Footer />
    </main>
  );
}
