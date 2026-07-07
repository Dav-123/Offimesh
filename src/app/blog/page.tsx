import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BlogContent } from './BlogContent';

export const metadata: Metadata = {
  title: 'Blog — OffiMesh',
  description: 'Updates, insights, and stories about building offline payment infrastructure for Africa.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-24 pb-16">
        <BlogContent />
      </div>
      <Footer />
    </main>
  );
}
