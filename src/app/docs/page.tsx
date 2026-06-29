import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/ui/placeholder-page';

export const metadata: Metadata = {
  title: 'Developer Docs',
  description: 'OffiMesh developer documentation - Integrate offline payments into your app.',
};

export default function DocsPage() {
  return (
    <PlaceholderPage
      title="Developer Documentation"
      description="Learn how to integrate OffiMesh offline payments into your application with our comprehensive guides and API reference."
    />
  );
}
