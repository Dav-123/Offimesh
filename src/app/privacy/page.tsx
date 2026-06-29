import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/ui/placeholder-page';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'OffiMesh privacy policy. Learn how we protect your data and maintain your privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <PlaceholderPage
      title="Privacy Policy"
      description="Your privacy is important to us. This policy outlines how OffiMesh collects, uses, and protects your information."
    />
  );
}
