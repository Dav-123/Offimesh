import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/ui/placeholder-page';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'OffiMesh terms of service and user agreement.',
};

export default function TermsPage() {
  return (
    <PlaceholderPage
      title="Terms of Service"
      description="By using OffiMesh, you agree to these terms. Please read them carefully before using our services."
    />
  );
}
