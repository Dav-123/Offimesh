import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/ui/placeholder-page';

export const metadata: Metadata = {
  title: 'Brand Assets',
  description: 'OffiMesh brand assets, logos, and design guidelines.',
};

export default function BrandAssetsPage() {
  return (
    <PlaceholderPage
      title="Brand Assets"
      description="Official OffiMesh logos, colors, typography, and design guidelines for partners and media."
    />
  );
}
