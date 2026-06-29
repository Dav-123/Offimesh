import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/ui/placeholder-page';

export const metadata: Metadata = {
  title: 'Security Policy',
  description: 'OffiMesh security policy and vulnerability disclosure guidelines.',
};

export default function SecurityPolicyPage() {
  return (
    <PlaceholderPage
      title="Security Policy"
      description="Learn about our security practices and how to responsibly report vulnerabilities."
    />
  );
}
