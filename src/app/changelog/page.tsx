import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/ui/placeholder-page';

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'OffiMesh version history and release notes.',
};

export default function ChangelogPage() {
  return (
    <PlaceholderPage
      title="Changelog"
      description="Track all updates, improvements, and fixes across OffiMesh releases."
    />
  );
}
