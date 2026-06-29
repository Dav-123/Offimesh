import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/ui/placeholder-page';

export const metadata: Metadata = {
  title: 'Press Kit',
  description: 'OffiMesh press kit - Media resources, logos, and brand guidelines.',
};

export default function PressKitPage() {
  return (
    <PlaceholderPage
      title="Press Kit"
      description="Media resources, logos, and brand guidelines for journalists and partners."
    />
  );
}
