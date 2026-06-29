import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/ui/placeholder-page';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the OffiMesh team and help build the future of offline payments.',
};

export default function CareersPage() {
  return (
    <PlaceholderPage
      title="Careers"
      description="Join our mission to bring offline payments to Africa. We are always looking for talented engineers and thinkers."
    />
  );
}
