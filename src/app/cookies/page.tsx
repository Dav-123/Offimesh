import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/ui/placeholder-page';

export const metadata: Metadata = {
  title: 'Cookies Policy',
  description: 'OffiMesh cookies policy - how we use cookies and similar technologies.',
};

export default function CookiesPage() {
  return (
    <PlaceholderPage
      title="Cookies Policy"
      description="This policy explains how OffiMesh uses cookies and similar technologies to improve your experience."
    />
  );
}
