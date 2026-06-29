import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/ui/placeholder-page';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'OffiMesh blog - Updates, insights, and stories about offline payments.',
};

export default function BlogPage() {
  return (
    <PlaceholderPage
      title="Blog"
      description="Updates, insights, and stories about building offline payment infrastructure for Africa."
    />
  );
}
