import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/ui/placeholder-page';

export const metadata: Metadata = {
  title: 'API Reference',
  description: 'OffiMesh API reference documentation for developers.',
};

export default function ApiReferencePage() {
  return (
    <PlaceholderPage
      title="API Reference"
      description="Complete API documentation for integrating OffiMesh payment functionality into your applications."
    />
  );
}
