import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/ui/placeholder-page';

export const metadata: Metadata = {
  title: 'System Status',
  description: 'OffiMesh system status and service availability.',
};

export default function StatusPage() {
  return (
    <PlaceholderPage
      title="System Status"
      description="Real-time status for all OffiMesh services and infrastructure."
    />
  );
}
