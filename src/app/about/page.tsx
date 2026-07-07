import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AboutContent } from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us — OffiMesh',
  description: 'Learn about OffiMesh mission to bring offline payments to Africa. Building financial inclusion for the unbanked.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-24 pb-16">
        <AboutContent />
      </div>
      <Footer />
    </main>
  );
}
