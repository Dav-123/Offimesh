import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/ui/placeholder-page';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about OffiMesh mission to bring offline payments to Africa.',
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      title="About OffiMesh"
      description="We are building the infrastructure for offline-first payments in Africa, enabling secure transactions regardless of connectivity."
    />
  );
}
